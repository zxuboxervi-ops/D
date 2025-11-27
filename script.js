// Real Instagram API System
class RealInstagramReporter {
    constructor() {
        this.isLoggedIn = false;
        this.isReporting = false;
        this.session = null;
        this.userId = null;
        this.targetUser = null;
        this.reportsSent = 0;
        this.successfulReports = 0;
        this.apiEndpoint = '/.netlify/functions/instagram-api';
    }

    // Real login with Instagram API
    async realLogin(username, password, twoFactorCode = null) {
        this.addLog(`🔐 Attempting real login for: ${username}`);
        this.updateAction('Logging in...');
        
        try {
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: 'login',
                    data: { username, password, twoFactorCode }
                })
            });

            const result = await response.json();
            
            if (result.success) {
                this.isLoggedIn = true;
                this.session = result.session;
                this.userId = result.userId;
                this.addLog('✅ Real login successful!');
                this.updateUI();
                return { success: true };
            } else if (result.twoFactorRequired) {
                this.addLog('📱 2FA required - please enter code');
                document.getElementById('twoFactorSection').style.display = 'block';
                return { twoFactorRequired: true };
            } else {
                this.addLog(`❌ Login failed: ${result.error}`);
                return { success: false, error: result.error };
            }
        } catch (error) {
            this.addLog(`💥 Login error: ${error.message}`);
            return { success: false, error: error.message };
        }
    }

    // Get target user info
    async getTargetInfo(username) {
        if (!this.isLoggedIn) {
            this.addLog('❌ Please login first!');
            return false;
        }

        this.addLog(`🔍 Getting real info for: @${username}`);
        this.updateAction('Fetching user info...');
        
        try {
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: 'getUserInfo',
                    data: { username, session: this.session }
                })
            });

            const result = await response.json();
            
            if (result.success) {
                this.targetUser = result.user;
                this.addLog(`✅ Found user: ${result.user.full_name} (${result.user.followed_by_count} followers)`);
                this.displayTargetInfo(result.user);
                return true;
            } else {
                this.addLog(`❌ User not found: ${result.error}`);
                return false;
            }
        } catch (error) {
            this.addLog(`💥 User info error: ${error.message}`);
            return false;
        }
    }

    // Submit real report
    async submitRealReport(targetUserId, reason, subreason = null) {
        if (!this.isLoggedIn || !this.targetUser) {
            throw new Error('Not logged in or no target set');
        }

        this.updateAction('Submitting report...');
        
        try {
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: 'reportUser',
                    data: {
                        targetUserId,
                        reason,
                        subreason,
                        session: this.session
                    }
                })
            });

            const result = await response.json();
            
            if (result.success && result.reported) {
                this.successfulReports++;
                return { success: true, message: 'Report submitted to Instagram' };
            } else {
                return { success: false, message: result.error || 'Report failed' };
            }
        } catch (error) {
            return { success: false, message: `API error: ${error.message}` };
        }
    }

    // Start real mass reporting
    async startRealMassReport() {
        if (this.isReporting) return;
        
        const targetUserId = this.targetUser?.id;
        const reason = document.getElementById('reportCategory').value;
        const subreason = document.getElementById('reportSubcategory').value;
        const count = parseInt(document.getElementById('reportCount').value);
        const useProxy = document.getElementById('useProxy').checked;

        if (!targetUserId) {
            this.addLog('❌ Please select a target first!');
            return;
        }

        this.isReporting = true;
        this.reportsSent = 0;
        this.successfulReports = 0;
        
        this.addLog(`🚀 Starting REAL mass report on user ID: ${targetUserId}`);
        this.addLog(`📊 Target: ${count} reports | Reason: ${reason}`);

        for (let i = 0; i < count && this.isReporting; i++) {
            this.reportsSent++;
            
            try {
                // Random delay to avoid detection (3-8 seconds)
                const delay = 3000 + Math.random() * 5000;
                await this.delay(delay);
                
                const result = await this.submitRealReport(targetUserId, reason, subreason);
                
                if (result.success) {
                    this.addLog(`✅ Report ${i+1}/${count}: ${result.message}`);
                } else {
                    this.addLog(`❌ Report ${i+1}/${count}: ${result.message}`);
                }
            } catch (error) {
                this.addLog(`💥 Report ${i+1}/${count} failed: ${error.message}`);
            }
            
            this.updateStats();
            
            // Update progress
            this.updateAction(`Reporting... ${i+1}/${count}`);
        }
        
        this.stopReporting();
        const successRate = ((this.successfulReports / this.reportsSent) * 100).toFixed(1);
        this.addLog(`🎯 Real reporting completed! Success rate: ${successRate}%`);
    }

    // Display target information
    displayTargetInfo(user) {
        const targetInfo = document.getElementById('targetInfo');
        targetInfo.innerHTML = `
            <div class="user-card">
                <strong>${user.full_name || user.username}</strong>
                <div>@${user.username}</div>
                <div>👥 ${user.followed_by_count?.toLocaleString()} followers</div>
                <div>📸 ${user.edge_owner_to_timeline_media?.count || 0} posts</div>
                <div>🆔 User ID: ${user.id}</div>
                <div>${user.is_private ? '🔒 Private Account' : '🔓 Public Account'}</div>
            </div>
        `;
        
        document.getElementById('targetUserId').textContent = user.id;
    }

    // Update subcategories based on category
    updateSubcategories() {
        const category = document.getElementById('reportCategory').value;
        const subcategorySelect = document.getElementById('reportSubcategory');
        
        const subcategories = this.getSubcategories(category);
        subcategorySelect.innerHTML = subcategories.map(sub => 
            `<option value="${sub.value}">${sub.text}</option>`
        ).join('');
    }

    getSubcategories(category) {
        const subcategories = {
            '1': [ // Spam
                { value: '1', text: 'Spam' },
                { value: '2', text: 'Fake Engagement' },
                { value: '3', text: 'Misleading Information' }
            ],
            '2': [ // Nudity
                { value: '1', text: 'Nudity' },
                { value: '2', text: 'Sexual Activity' },
                { value: '3', text: 'Sexual Solicitation' }
            ],
            // Add more subcategories for other report types...
        };
        
        return subcategories[category] || [{ value: '1', text: 'General' }];
    }

    // Utility methods
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    addLog(message) {
        const logContainer = document.getElementById('logContainer');
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';
        logEntry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
        logContainer.appendChild(logEntry);
        logContainer.scrollTop = logContainer.scrollHeight;
    }

    updateAction(action) {
        document.getElementById('currentAction').textContent = action;
    }

    updateStats() {
        document.getElementById('reportsSent').textContent = this.reportsSent;
        
        const successRate = this.reportsSent > 0 ? 
            ((this.successfulReports / this.reportsSent) * 100).toFixed(1) + '%' : '0%';
        document.getElementById('apiSuccess').textContent = successRate;
    }

    updateUI() {
        document.getElementById('loginStatusText').textContent = this.isLoggedIn ? 
            `Logged in (User ID: ${this.userId})` : 'Not Logged In';
        
        document.getElementById('targetSection').style.display = this.isLoggedIn ? 'block' : 'none';
        document.getElementById('reportSection').style.display = this.isLoggedIn ? 'block' : 'none';
        document.getElementById('controlSection').style.display = this.isLoggedIn ? 'block' : 'none';
        
        document.getElementById('startBtn').disabled = !this.isLoggedIn || !this.targetUser || this.isReporting;
    }

    stopReporting() {
        this.isReporting = false;
        this.updateAction('Idle');
        this.addLog('🛑 Reporting stopped');
    }

    logout() {
        this.isLoggedIn = false;
        this.session = null;
        this.targetUser = null;
        this.reportsSent = 0;
        this.successfulReports = 0;
        
        document.getElementById('twoFactorSection').style.display = 'none';
        document.getElementById('targetInfo').innerHTML = '';
        
        this.addLog('🚪 Logged out successfully');
        this.updateUI();
        this.updateStats();
    }
}

// Global instance
const realInstagram = new RealInstagramReporter();

// UI Event Handlers
async function realLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        realInstagram.addLog('❌ Please enter both username and password');
        return;
    }
    
    const result = await realInstagram.realLogin(username, password);
    
    if (result.success) {
        document.getElementById('loginStatus').textContent = '✅ Login successful!';
    }
}

async function submitTwoFactor() {
    const code = document.getElementById('twoFactorCode').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!code) {
        realInstagram.addLog('❌ Please enter 2FA code');
        return;
    }
    
    const result = await realInstagram.realLogin(username, password, code);
    
    if (result.success) {
        document.getElementById('twoFactorSection').style.display = 'none';
        document.getElementById('loginStatus').textContent = '✅ Login with 2FA successful!';
    }
}

function getTargetInfo() {
    const target = document.getElementById('targetUsername').value;
    
    if (!target) {
        realInstagram.addLog('❌ Please enter target username');
        return;
    }
    
    realInstagram.getTargetInfo(target);
}

function startRealReporting() {
    realInstagram.startRealMassReport();
}

function stopReporting() {
    realInstagram.stopReporting();
}

function logout() {
    realInstagram.logout();
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reportCategory').addEventListener('change', function() {
        realInstagram.updateSubcategories();
    });
    realInstagram.updateSubcategories();
});        this.reportsSent = 0;
        this.successfulReports = 0;
        this.startTime = Date.now();
        
        this.addLog(`🚀 Starting mass report on @${target}`);
        this.addLog(`📊 Configuration: ${count} reports, ${delay}s delay, ${intensity} intensity`);
        
        this.startTimer();
        
        const batchSize = this.getBatchSize(intensity);
        const totalBatches = Math.ceil(count / batchSize);
        
        for (let batch = 0; batch < totalBatches && this.isReporting; batch++) {
            const batchPromises = [];
            
            for (let i = 0; i < batchSize && this.reportsSent < count && this.isReporting; i++) {
                batchPromises.push(this.sendSingleReport(target, method));
            }
            
            // Wait for current batch to complete
            await Promise.all(batchPromises);
            
            // Delay between batches
            if (batch < totalBatches - 1 && this.isReporting) {
                this.addLog(`⏳ Batch ${batch + 1}/${totalBatches} completed, waiting...`);
                await this.delay(delay * 1000);
            }
        }
        
        this.stopReport();
        this.addLog(`🎯 Mass report completed! Success rate: ${((this.successfulReports / this.reportsSent) * 100).toFixed(1)}%`);
    }

    // Send single report
    async sendSingleReport(target, method) {
        if (!this.isReporting) return;
        
        this.reportsSent++;
        const reportNumber = this.reportsSent;
        
        try {
            const result = await this.submitReport(target, method, method);
            
            if (result.success) {
                this.addLog(`✅ Report ${reportNumber}: ${result.message}`);
            } else {
                this.addLog(`❌ Report ${reportNumber}: ${result.message}`);
            }
        } catch (error) {
            this.addLog(`💥 Report ${reportNumber} failed: ${error.message}`);
        }
        
        this.updateStats();
    }

    // Get batch size based on intensity
    getBatchSize(intensity) {
        const sizes = {
            'low': 1,
            'medium': 3,
            'high': 5,
            'extreme': 10
        };
        return sizes[intensity] || 1;
    }

    // Stop reporting
    stopReport() {
        this.isReporting = false;
        this.stopTimer();
        this.addLog('🛑 Reporting stopped by user');
        this.updateUI();
    }

    // Timer functions
    startTimer() {
        this.timerInterval = setInterval(() => {
            this.updateStats();
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    // Utility functions
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    addLog(message) {
        const logContainer = document.getElementById('logContainer');
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';
        logEntry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
        logContainer.appendChild(logEntry);
        logContainer.scrollTop = logContainer.scrollHeight;
    }

    updateStats() {
        document.getElementById('reportsSent').textContent = this.reportsSent;
        
        const successRate = this.reportsSent > 0 ? 
            (this.successfulReports / this.reportsSent * 100).toFixed(1) + '%' : '0%';
        document.getElementById('successRate').textContent = successRate;
        
        const banProbability = Math.min(95, (this.successfulReports * 100) / Math.max(this.reportsSent, 1) + 10);
        document.getElementById('banProbability').textContent = Math.round(banProbability) + '%';
        
        if (this.startTime) {
            const timeRunning = Math.floor((Date.now() - this.startTime) / 1000);
            document.getElementById('timeRunning').textContent = timeRunning + 's';
        }
    }

    updateUI() {
        // Update login section
        document.getElementById('loginStatusText').textContent = this.isLoggedIn ? 
            `Logged in as ${this.session.username}` : 'Not Logged In';
        
        // Show/hide sections based on state
        document.getElementById('targetSection').style.display = this.isLoggedIn ? 'block' : 'none';
        document.getElementById('reportSection').style.display = this.isLoggedIn ? 'block' : 'none';
        document.getElementById('controlSection').style.display = this.isLoggedIn ? 'block' : 'none';
        
        // Update target status
        document.getElementById('targetStatusText').textContent = this.currentTarget ? 
            `Target: @${this.currentTarget}` : 'Not Set';
        
        // Update button states
        document.getElementById('startBtn').disabled = !this.isLoggedIn || !this.currentTarget || this.isReporting;
        document.getElementById('stopBtn').style.display = this.isReporting ? 'inline-block' : 'none';
    }

    // Reset system
    reset() {
        this.stopReport();
        this.isLoggedIn = false;
        this.session = null;
        this.currentTarget = null;
        this.reportsSent = 0;
        this.successfulReports = 0;
        
        document.getElementById('logContainer').innerHTML = `
            <div class="log-entry">[SYSTEM] System has been reset</div>
            <div class="log-entry">[INFO] Please login to start reporting</div>
        `;
        
        this.updateUI();
        this.updateStats();
    }
}

// Global instance
const instagramReporter = new InstagramReporter();

// UI Event Handlers
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        instagramReporter.addLog('❌ Please enter both username and password');
        return;
    }
    
    instagramReporter.login(username, password);
}

function verifyTarget() {
    const target = document.getElementById('targetUsername').value;
    
    if (!target) {
        instagramReporter.addLog('❌ Please enter target username');
        return;
    }
    
    instagramReporter.verifyTarget(target);
}

function startMassReport() {
    const target = instagramReporter.currentTarget;
    const method = document.getElementById('reportMethod').value;
    const count = parseInt(document.getElementById('reportCount').value);
    const delay = parseInt(document.getElementById('reportDelay').value);
    const intensity = document.getElementById('reportIntensity').value;
    
    if (!target) {
        instagramReporter.addLog('❌ Please set a target first');
        return;
    }
    
    instagramReporter.startMassReport(target, method, count, delay, intensity);
}

function stopReport() {
    instagramReporter.stopReport();
}

function resetSystem() {
    instagramReporter.reset();
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    instagramReporter.updateUI();
});
