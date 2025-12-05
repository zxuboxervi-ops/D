// API Configuration
let API_CONFIG = {
    apiKey: 'sk-93a8a9e41b0141fcab83c6b99c8ac6ca,
    model: 'deepseek-chat',
    maxTokens: 2048,
    temperature: 0.7
};

// Chat state
let chatHistory = [];
let currentChatId = null;
let isProcessing = false;

// DOM Elements
const chatContainer = document.getElementById('chatContainer');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const newChatBtn = document.getElementById('newChatBtn');
const apiConfigBtn = document.getElementById('apiConfigBtn');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const apiModal = document.getElementById('apiModal');
const apiKeyInput = document.getElementById('apiKey');
const modelSelect = document.getElementById('model');
const maxTokensInput = document.getElementById('maxTokens');
const temperatureInput = document.getElementById('temperature');
const tempValue = document.getElementById('tempValue');
const saveApiBtn = document.getElementById('saveApiBtn');
const testApiBtn = document.getElementById('testApiBtn');
const chatHistoryContainer = document.getElementById('chatHistory');
const quickPrompts = document.querySelectorAll('.quick-prompt');

// Initialize
function init() {
    loadConfig();
    loadChatHistory();
    setupEventListeners();
    updateStatus();
}

// Load configuration from localStorage
function loadConfig() {
    const savedConfig = localStorage.getItem('deepseek_api_config');
    if (savedConfig) {
        API_CONFIG = { ...API_CONFIG, ...JSON.parse(savedConfig) };
        apiKeyInput.value = API_CONFIG.apiKey;
        modelSelect.value = API_CONFIG.model;
        maxTokensInput.value = API_CONFIG.maxTokens;
        temperatureInput.value = API_CONFIG.temperature;
        tempValue.textContent = API_CONFIG.temperature;
    }
}

// Save configuration to localStorage
function saveConfig() {
    localStorage.setItem('deepseek_api_config', JSON.stringify(API_CONFIG));
    showNotification('Configuration saved successfully!', 'success');
}

// Load chat history from localStorage
function loadChatHistory() {
    const savedHistory = localStorage.getItem('deepseek_chat_history');
    if (savedHistory) {
        chatHistory = JSON.parse(savedHistory);
        renderChatHistory();
    }
}

// Save chat history to localStorage
function saveChatHistory() {
    localStorage.setItem('deepseek_chat_history', JSON.stringify(chatHistory));
}

// Setup event listeners
function setupEventListeners() {
    // Send message on button click
    sendBtn.addEventListener('click', sendMessage);
    
    // Send message on Enter (but allow Shift+Enter for new line)
    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // Auto-resize textarea
    userInput.addEventListener('input', () => {
        userInput.style.height = 'auto';
        userInput.style.height = (userInput.scrollHeight) + 'px';
    });
    
    // New chat button
    newChatBtn.addEventListener('click', createNewChat);
    
    // API configuration button
    apiConfigBtn.addEventListener('click', () => {
        apiModal.style.display = 'flex';
    });
    
    // Close modal
    apiModal.querySelector('.close-btn').addEventListener('click', () => {
        apiModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === apiModal) {
            apiModal.style.display = 'none';
        }
    });
    
    // Save API configuration
    saveApiBtn.addEventListener('click', () => {
        API_CONFIG.apiKey = apiKeyInput.value.trim();
        API_CONFIG.model = modelSelect.value;
        API_CONFIG.maxTokens = parseInt(maxTokensInput.value);
        API_CONFIG.temperature = parseFloat(temperatureInput.value);
        saveConfig();
        apiModal.style.display = 'none';
        updateStatus();
    });
    
    // Test API connection
    testApiBtn.addEventListener('click', testApiConnection);
    
    // Clear history
    clearHistoryBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all chat history?')) {
            chatHistory = [];
            saveChatHistory();
            renderChatHistory();
            chatContainer.innerHTML = '';
            showNotification('Chat history cleared!', 'success');
        }
    });
    
    // Temperature slider
    temperatureInput.addEventListener('input', () => {
        tempValue.textContent = temperatureInput.value;
    });
    
    // Quick prompts
    quickPrompts.forEach(button => {
        button.addEventListener('click', () => {
            userInput.value = button.dataset.prompt;
            userInput.style.height = 'auto';
            userInput.style.height = (userInput.scrollHeight) + 'px';
            userInput.focus();
        });
    });
}

// Update connection status
function updateStatus() {
    const statusText = document.getElementById('statusText');
    if (API_CONFIG.apiKey) {
        statusText.textContent = 'Connected';
        statusText.style.color = '#22c55e';
    } else {
        statusText.textContent = 'API Key Required';
        statusText.style.color = '#ef4444';
    }
}

// Create new chat
function createNewChat() {
    currentChatId = Date.now().toString();
    chatContainer.innerHTML = `
        <div class="welcome-message">
            <h3><i class="fas fa-rocket"></i> New Chat Started</h3>
            <p>Ask me anything. I can help with coding, analysis, creative writing, and more.</p>
            <div class="quick-prompts">
                <button class="quick-prompt" data-prompt="Write Python code to calculate fibonacci sequence">Fibonacci Code</button>
                <button class="quick-prompt" data-prompt="Explain quantum computing in simple terms">Quantum Computing</button>
                <button class="quick-prompt" data-prompt="Write a poem about technology">Write a Poem</button>
                <button class="quick-prompt" data-prompt="Plan a 3-day survival strategy in wilderness">Survival Strategy</button>
            </div>
        </div>
    `;
    
    // Re-attach quick prompt listeners
    document.querySelectorAll('.quick-prompt').forEach(button => {
        button.addEventListener('click', () => {
            userInput.value = button.dataset.prompt;
            userInput.style.height = 'auto';
            userInput.style.height = (userInput.scrollHeight) + 'px';
            userInput.focus();
        });
    });
    
    showNotification('New chat created!', 'success');
}

// Render chat history in sidebar
function renderChatHistory() {
    chatHistoryContainer.innerHTML = '';
    
    chatHistory.forEach(chat => {
        const chatItem = document.createElement('div');
        chatItem.className = 'chat-item';
        chatItem.innerHTML = `
            <i class="fas fa-comment chat-icon"></i>
            <span>${chat.title || 'Untitled Chat'}</span>
        `;
        
        chatItem.addEventListener('click', () => {
            loadChat(chat.id);
        });
        
        chatHistoryContainer.appendChild(chatItem);
    });
}

// Load a specific chat
function loadChat(chatId) {
    const chat = chatHistory.find(c => c.id === chatId);
    if (!chat) return;
    
    currentChatId = chatId;
    chatContainer.innerHTML = '';
    
    chat.messages.forEach(message => {
        addMessageToUI(message.role, message.content);
    });
    
    showNotification('Chat loaded!', 'success');
}

// Send message to API
async function sendMessage() {
    const message = userInput.value.trim();
    if (!message || isProcessing || !API_CONFIG.apiKey) {
        if (!API_CONFIG.apiKey) {
            showNotification('Please configure your API key first!', 'error');
            apiModal.style.display = 'flex';
        }
        return;
    }
    
    // Add user message to UI
    addMessageToUI('user', message);
    
    // Clear input and reset height
    userInput.value = '';
    userInput.style.height = 'auto';
    
    // Disable input while processing
    isProcessing = true;
    sendBtn.disabled = true;
    userInput.disabled = true;
    userInput.placeholder = 'Processing...';
    
    try {
        // Prepare messages for API
        const messages = [
            { role: 'system', content: 'You are a helpful AI assistant. Provide detailed, accurate responses.' },
            { role: 'user', content: message }
        ];
        
        // Call DeepSeek API
        const response = await callDeepSeekAPI(messages);
        
        // Add AI response to UI
        addMessageToUI('assistant', response);
        
        // Save to chat history
        saveMessageToHistory(message, response);
        
    } catch (error) {
        console.error('Error:', error);
        addMessageToUI('assistant', `Error: ${error.message}. Please check your API key and try again.`);
        showNotification('API Error: ' + error.message, 'error');
    } finally {
        // Re-enable input
        isProcessing = false;
        sendBtn.disabled = false;
        userInput.disabled = false;
        userInput.placeholder = 'Type your message here... (Shift+Enter for new line, Enter to send)';
        userInput.focus();
    }
}

// Call DeepSeek API
async function callDeepSeekAPI(messages) {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_CONFIG.apiKey}`
        },
        body: JSON.stringify({
            model: API_CONFIG.model,
            messages: messages,
            max_tokens: API_CONFIG.maxTokens,
            temperature: API_CONFIG.temperature,
            stream: false
        })
    });
    
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `HTTP ${response.status}`);
    }
    
    const data = await response.json();
    return data.choices[0].message.content;
}

// Add message to UI
function addMessageToUI(role, content) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}-message`;
    
    const headerIcon = role === 'user' ? 'fas fa-user' : 'fas fa-robot';
    const headerText = role === 'user' ? 'You' : 'DeepSeek AI';
    
    // Format code blocks
    let formattedContent = content.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
        lang = lang || 'text';
        return `<pre><code class="language-${lang}">${escapeHtml(code.trim())}</code></pre>`;
    });
    
    // Format inline code
    formattedContent = formattedContent.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    messageDiv.innerHTML = `
        <div class="message-header">
            <i class="${headerIcon}"></i>
            <span>${headerText}</span>
        </div>
        <div class="message-content">${formattedContent}</div>
    `;
    
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    // Highlight code with Prism (if available)
    if (window.Prism) {
        Prism.highlightAllUnder(messageDiv);
    }
}

// Save message to history
function saveMessageToHistory(userMessage, aiResponse) {
    if (!currentChatId) {
        currentChatId = Date.now().toString();
    }
    
    let chat = chatHistory.find(c => c.id === currentChatId);
    
    if (!chat) {
        chat = {
            id: currentChatId,
            title: userMessage.substring(0, 30) + (userMessage.length > 30 ? '...' : ''),
            messages: []
        };
        chatHistory.unshift(chat);
    }
    
    chat.messages.push(
        { role: 'user', content: userMessage },
        { role: 'assistant', content: aiResponse }
    );
    
    // Update title if it's still the default
    if (chat.title === 'Untitled Chat' || chat.title.includes('...')) {
        chat.title = userMessage.substring(0, 30) + (userMessage.length > 30 ? '...' : '');
    }
    
    saveChatHistory();
    renderChatHistory();
}

// Test API connection
async function testApiConnection() {
    if (!API_CONFIG.apiKey) {
        showNotification('Please enter your API key first!', 'error');
        return;
    }
    
    testApiBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Testing...';
    testApiBtn.disabled = true;
    
    try {
        const response = await fetch('https://api.deepseek.com/v1/models', {
            headers: {
                'Authorization': `Bearer ${API_CONFIG.apiKey}`
            }
        });
        
        if (response.ok) {
            showNotification('API connection successful!', 'success');
        } else {
            throw new Error(`HTTP ${response.status}`);
        }
    } catch (error) {
        showNotification('API connection failed: ' + error.message, 'error');
    } finally {
        testApiBtn.innerHTML = '<i class="fas fa-vial"></i> Test Connection';
        testApiBtn.disabled = false;
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Add styles for notification
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 20px;
                background: #1e293b;
                border-left: 4px solid #3b82f6;
                border-radius: 8px;
                display: flex;
                align-items: center;
                gap: 10px;
                z-index: 10000;
                animation: slideIn 0.3s ease;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                max-width: 350px;
            }
            
            .notification.success {
                border-left-color: #22c55e;
            }
            
            .notification.error {
                border-left-color: #ef4444;
            }
            
            .notification i {
                font-size: 1.2rem;
            }
            
            .notification.success i {
                color: #22c55e;
            }
            
            .notification.error i {
                color: #ef4444;
            }
            
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Utility function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
