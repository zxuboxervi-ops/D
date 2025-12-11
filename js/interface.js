// CHAOS SQL INJECTION INTERFACE CONTROLLER

class InterfaceController {
    constructor() {
        this.engine = new ChaosSQLEngine();
        this.initializeEventListeners();
        this.initializeTabs();
    }

    initializeEventListeners() {
        // Main action buttons
        document.getElementById('startScan').addEventListener('click', () => this.startScan());
        document.getElementById('stopScan').addEventListener('click', () => this.stopScan());
        document.getElementById('exportResults').addEventListener('click', () => this.engine.exportResults());

        // Exploitation buttons
        document.getElementById('extractDB').addEventListener('click', () => this.extractDatabaseInfo());
        document.getElementById('dumpTables').addEventListener('click', () => this.dumpAllTables());
        document.getElementById('getShell').addEventListener('click', () => this.uploadShell());

        // Payload toggles
        document.getElementById('customPayload').addEventListener('change', (e) => {
            document.getElementById('customPayloadText').disabled = !e.target.checked;
        });

        // Real-time validation
        document.getElementById('targetUrl').addEventListener('input', (e) => {
            this.validateUrl(e.target.value);
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case 'Enter':
                        e.preventDefault();
                        this.startScan();
                        break;
                    case 's':
                        e.preventDefault();
                        this.engine.exportResults();
                        break;
                }
            }
        });
    }

    initializeTabs() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabName = button.getAttribute('data-tab');
                
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                document.getElementById(tabName).classList.add('active');
            });
        });
    }

    validateUrl(url) {
        try {
            new URL(url);
            document.getElementById('targetUrl').style.borderColor = '#00ff00';
            return true;
        } catch (e) {
            document.getElementById('targetUrl').style.borderColor = '#ff0000';
            return false;
        }
    }

    async startScan() {
        const targetUrl = document.getElementById('targetUrl').value.trim();
        
        if (!targetUrl) {
            this.showNotification('Please enter a target URL', 'error');
            return;
        }

        if (!this.validateUrl(targetUrl)) {
            this.showNotification('Please enter a valid URL', 'error');
            return;
        }

        // Disable start button, enable stop button
        document.getElementById('startScan').disabled = true;
        document.getElementById('stopScan').disabled = false;

        // Collect options
        const options = {
            unionPayload: document.getElementById('unionPayload').checked,
            errorPayload: document.getElementById('errorPayload').checked,
            blindPayload: document.getElementById('blindPayload').checked,
            timePayload: document.getElementById('timePayload').checked,
            customPayload: document.getElementById('customPayload').checked,
            customPayloads: document.getElementById('customPayloadText').value,
            threads: parseInt(document.getElementById('threadCount').value),
            method: document.getElementById('httpMethod').value
        };

        // Clear previous results
        this.clearResults();

        // Start the scan
        try {
            await this.engine.startScan(targetUrl, options);
            this.showNotification(`Scan completed! Found ${this.engine.vulnCount} vulnerabilities`, 'success');
        } catch (error) {
            this.showNotification(`Scan failed: ${error.message}`, 'error');
        } finally {
            // Re-enable buttons
            document.getElementById('startScan').disabled = false;
            document.getElementById('stopScan').disabled = true;
        }
    }

    stopScan() {
        this.engine.stopScan();
        document.getElementById('startScan').disabled = false;
        document.getElementById('stopScan').disabled = true;
    }

    clearResults() {
        document.getElementById('vulnResults').innerHTML = '';
        document.getElementById('scanLogs').innerHTML = '';
        document.getElementById('exploitResults').innerHTML = '';
        document.getElementById('rawResponse').innerHTML = '';
        document.getElementById('requestCount').textContent = '0';
        document.getElementById('vulnCount').textContent = '0';
        document.getElementById('progressFill').style.width = '0%';
        document.getElementById('progressText').textContent = '0%';
    }

    async extractDatabaseInfo() {
        if (this.engine.results.length === 0) {
            this.showNotification('No vulnerabilities found to exploit', 'warning');
            return;
        }

        // Find the first union-based vulnerability
        const unionVuln = this.engine.results.find(v => v.type === 'union');
        if (!unionVuln) {
            this.showNotification('No union-based vulnerability found', 'warning');
            return;
        }

        const output = document.getElementById('exploitResults');
        output.innerHTML = '<div class="loading">Extracting database information...</div>';

        try {
            const results = await this.engine.extractDatabaseInfo(
                unionVuln.url, 
                unionVuln.parameter, 
                unionVuln.method
            );

            let html = '<h4>Database Information Extracted:</h4>';
            for (const [key, value] of Object.entries(results)) {
                html += `
                    <div class="exploit-result">
                        <strong>${key.toUpperCase()}:</strong> ${value}
                    </div>
                `;
            }

            output.innerHTML = html;
            this.showNotification('Database information extracted successfully', 'success');
        } catch (error) {
            output.innerHTML = `<div class="error">Error: ${error.message}</div>`;
            this.showNotification('Failed to extract database information', 'error');
        }
    }

    async dumpAllTables() {
        if (this.engine.results.length === 0) {
            this.showNotification('No vulnerabilities found to exploit', 'warning');
            return;
        }

        const unionVuln = this.engine.results.find(v => v.type === 'union');
        if (!unionVuln) {
            this.showNotification('No union-based vulnerability found', 'warning');
            return;
        }

        const output = document.getElementById('exploitResults');
        output.innerHTML = '<div class="loading">Dumping all tables...</div>';

        // This would be a complex operation in real scenario
        // For demo, we'll simulate the process
        setTimeout(() => {
            output.innerHTML = `
                <h4>Table Dump Results:</h4>
                <div class="table-list">
                    <div class="table-item">
                        <strong>users</strong> - 1,234 records
                        <div class="columns">id, username, password, email, created_at</div>
                    </div>
                    <div class="table-item">
                        <strong>admin</strong> - 5 records
                        <div class="columns">id, username, password, role, last_login</div>
                    </div>
                    <div class="table-item">
                        <strong>products</strong> - 567 records
                        <div class="columns">id, name, description, price, stock</div>
                    </div>
                </div>
            `;
            this.showNotification('Tables dumped successfully', 'success');
        }, 2000);
    }

    async uploadShell() {
        if (this.engine.results.length === 0) {
            this.showNotification('No vulnerabilities found to exploit', 'warning');
            return;
        }

        const output = document.getElementById('exploitResults');
        output.innerHTML = '<div class="loading">Attempting to upload shell...</div>';

        // Simulate shell upload attempt
        setTimeout(() => {
            const shellUrl = 'http://target.com/shell_1337.php';
            output.innerHTML = `
                <h4>Shell Upload Results:</h4>
                <div class="shell-result">
                    <p><strong>Status:</strong> Shell uploaded successfully!</p>
                    <p><strong>Shell URL:</strong> <code>${shellUrl}</code></p>
                    <p><strong>Access:</strong> <a href="${shellUrl}?cmd=id" target="_blank">Test Shell</a></p>
                    <div class="shell-commands">
                        <h5>Available Commands:</h5>
                        <ul>
                            <li><code>?cmd=ls -la</code> - List files</li>
                            <li><code>?cmd=id</code> - User info</li>
                            <li><code>?cmd=uname -a</code> - System info</li>
                            <li><code>?cmd=cat /etc/passwd</code> - Password file</li>
                        </ul>
                    </div>
                </div>
            `;
            this.showNotification('Shell uploaded successfully!', 'success');
        }, 3000);
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${this.getNotificationIcon(type)}"></i>
            ${message}
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background: ${this.getNotificationColor(type)};
            color: white;
            border-radius: 5px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            z-index: 1000;
            animation: slideIn 0.3s ease;
            font-size: 14px;
            max-width: 300px;
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    getNotificationColor(type) {
        const colors = {
            success: 'linear-gradient(45deg, #006400, #00ff00)',
            error: 'linear-gradient(45deg, #8b0000, #dc143c)',
            warning: 'linear-gradient(45deg, #ff8c00, #ffd700)',
            info: 'linear-gradient(45deg, #000080, #4169e1)'
        };
        return colors[type] || colors.info;
    }

    // Add CSS animations
    addNotificationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Add additional styles for exploit results
const exploitStyles = document.createElement('style');
exploitStyles.textContent = `
    .loading {
        color: #00ff00;
        text-align: center;
        padding: 20px;
    }
    
    .exploit-result {
        background: rgba(0, 255, 0, 0.1);
        border: 1px solid #00ff00;
        border-radius: 5px;
        padding: 10px;
        margin: 10px 0;
    }
    
    .table-list {
        margin-top: 20px;
    }
    
    .table-item {
        background: rgba(0, 100, 200, 0.1);
        border: 1px solid #0080ff;
        border-radius: 5px;
        padding: 15px;
        margin: 10px 0;
    }
    
    .table-item strong {
        color: #00ffff;
        font-size: 16px;
    }
    
    .columns {
        color: #ccc;
        font-size: 13px;
        margin-top: 5px;
        font-family: monospace;
    }
    
    .shell-result {
        background: rgba(255, 165, 0, 0.1);
        border: 1px solid #ffa500;
        border-radius: 5px;
        padding: 20px;
    }
    
    .shell-commands {
        margin-top: 15px;
        padding: 15px;
        background: #111;
        border-radius: 5px;
    }
    
    .shell-commands ul {
        list-style: none;
        padding: 0;
    }
    
    .shell-commands li {
        margin: 5px 0;
        font-family: monospace;
    }
    
    .error {
        color: #ff6666;
        background: rgba(255, 0, 0, 0.1);
        border: 1px solid #ff0000;
        border-radius: 5px;
        padding: 10px;
    }
`;

document.head.appendChild(exploitStyles);

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.interfaceController = new InterfaceController();
    
    // Add notification styles
    if (window.interfaceController) {
        window.interfaceController.addNotificationStyles();
    }
});

// Make it work in Netlify environment
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        console.log('🔥 CHAOS SQL INJECTION WEB v666 LOADED 🔥');
        console.log('Ready to destroy some databases! 💀');
    });
}
