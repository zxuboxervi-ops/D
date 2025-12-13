// XSS Methods Configuration - CHAOS XSS Tool v666.1

const XSS_METHODS = {
    basic: {
        name: "Basic XSS",
        description: "Simple XSS payloads for beginners - Script tags, image onerror, basic event handlers",
        totalPayloads: 200,
        categories: [
            {id: 'script', name: 'Script Tags', count: 16, icon: 'code', color: '#00ff00'},
            {id: 'img', name: 'Image OnError', count: 14, icon: 'image', color: '#ff6600'},
            {id: 'svg', name: 'SVG OnLoad', count: 13, icon: 'vector-square', color: '#0080ff'},
            {id: 'iframe', name: 'Iframe Src', count: 12, icon: 'window-maximize', color: '#ff0080'},
            {id: 'input', name: 'Input Events', count: 14, icon: 'keyboard', color: '#ffff00'},
            {id: 'body', name: 'Body Events', count: 14, icon: 'square', color: '#00ffff'},
            {id: 'div', name: 'Div Events', count: 14, icon: 'th', color: '#ff0000'},
            {id: 'link', name: 'Link Href', count: 8, icon: 'link', color: '#800080'},
            {id: 'meta', name: 'Meta Refresh', count: 6, icon: 'sync', color: '#696969'},
            {id: 'object', name: 'Object Data', count: 8, icon: 'cube', color: '#008000'},
            {id: 'embed', name: 'Embed Src', count: 8, icon: 'play', color: '#ffa500'},
            {id: 'form', name: 'Form Action', count: 6, icon: 'wpforms', color: '#000080'},
            {id: 'button', name: 'Button Events', count: 8, icon: 'mouse-pointer', color: '#ff6347'},
            {id: 'a', name: 'Anchor Href', count: 7, icon: 'external-link-alt', color: '#32cd32'},
            {id: 'img_event', name: 'Image Events', count: 14, icon: 'image', color: '#ff1493'},
            {id: 'marquee', name: 'Marquee Events', count: 7, icon: 'arrows-alt-h', color: '#8b4513'},
            {id: 'details', name: 'Details Toggle', count: 6, icon: 'info-circle', color: '#4682b4'},
            {id: 'meter', name: 'Meter Events', count: 8, icon: 'tachometer-alt', color: '#2f4f4f'},
            {id: 'progress', name: 'Progress Events', count: 8, icon: 'tasks', color: '#708090'},
            {id: 'audio_video', name: 'Audio/Video', count: 11, icon: 'video', color: '#dc143c'},
            {id: 'mathml', name: 'MathML', count: 6, icon: 'calculator', color: '#8b008b'},
            {id: 'css', name: 'CSS Injection', count: 10, icon: 'css3', color: '#264de4'},
            {id: 'data_uri', name: 'Data URI', count: 8, icon: 'database', color: '#f16529'},
            {id: 'javascript_uri', name: 'JavaScript URI', count: 10, icon: 'js', color: '#f7df1e'},
            {id: 'vbscript', name: 'VBScript', count: 5, icon: 'windows', color: '#00bcf2'},
            {id: 'expression', name: 'CSS Expression', count: 10, icon: 'code', color: '#800000'},
            {id: 'meta_refresh', name: 'Meta Refresh', count: 5, icon: 'refresh', color: '#696969'},
            {id: 'polyglot', name: 'Polyglot', count: 10, icon: 'language', color: '#ff4500'}
        ],
        
        payloads: {
            // Basic payloads will be loaded from xss-payloads.js
        }
    },
    
    advanced: {
        name: "Advanced XSS",
        description: "Advanced techniques with encoding bypass, WAF bypass, HTML5 specific, mutation observers, and obfuscation",
        totalPayloads: 300,
        categories: [
            {id: 'event_handlers', name: 'Event Handlers', count: 40, icon: 'mouse-pointer', color: '#ff0000'},
            {id: 'encoding_bypass', name: 'Encoding Bypass', count: 16, icon: 'shield-alt', color: '#ff6600'},
            {id: 'waf_bypass', name: 'WAF Bypass', count: 17, icon: 'ban', color: '#ffff00'},
            {id: 'html5_new', name: 'HTML5 New', count: 23, icon: 'html5', color: '#00ff00'},
            {id: 'mutation', name: 'Mutation Based', count: 10, icon: 'dna', color: '#0080ff'},
            {id: 'javascript_mixed', name: 'JavaScript Mixed', count: 20, icon: 'js', color: '#ff0080'},
            {id: 'protocol_handler', name: 'Protocol Handler', count: 15, icon: 'link', color: '#800080'},
            {id: 'svg_advanced', name: 'SVG Advanced', count: 16, icon: 'vector-square', color: '#808080'},
            {id: 'mathml_advanced', name: 'MathML Advanced', count: 10, icon: 'calculator', color: '#008000'},
            {id: 'xml_advanced', name: 'XML Advanced', count: 5, icon: 'code', color: '#ffa500'},
            {id: 'flash', name: 'Flash', count: 11, icon: 'play', color: '#ff1493'},
            {id: 'xslt', name: 'XSLT', count: 3, icon: 'code', color: '#4682b4'},
            {id: 'xxe', name: 'XXE Injection', count: 5, icon: 'bug', color: '#dc143c'},
            {id: 'ldap_injection', name: 'LDAP Injection', count: 10, icon: 'folder', color: '#2f4f4f'},
            {id: 'xpath_injection', name: 'XPath Injection', count: 10, icon: 'search', color: '#708090'},
            {id: 'command_injection', name: 'Command Injection', count: 20, icon: 'terminal', color: '#000000'},
            {id: 'nosql_injection', name: 'NoSQL Injection', count: 10, icon: 'database', color: '#32cd32'},
            {id: 'ssti', name: 'SSTI Injection', count: 15, icon: 'code', color: '#8b008b'},
            {id: 'polyglot_advanced', name: 'Advanced Polyglot', count: 21, icon: 'language', color: '#ff4500'},
            {id: 'javascript_obfuscation', name: 'JS Obfuscation', count: 15, icon: 'lock', color: '#800000'},
            {id: 'css_expression', name: 'CSS Expression', count: 15, icon: 'css3', color: '#264de4'}
        ],
        
        payloads: {
            // Advanced payloads will be loaded from xss-payloads.js
        }
    },
    
    blind: {
        name: "Blind XSS",
        description: "Blind XSS payloads with callbacks, delayed execution, persistent methods, and service workers",
        totalPayloads: 150,
        categories: [
            {id: 'callback', name: 'Callback URLs', count: 10, icon: 'phone', color: '#00ff00'},
            {id: 'delayed', name: 'Delayed Execution', count: 10, icon: 'clock', color: '#ff6600'},
            {id: 'persistent', name: 'Persistent Methods', count: 10, icon: 'sync', color: '#ffff00'},
            {id: 'service_worker', name: 'Service Workers', count: 10, icon: 'cog', color: '#0080ff'},
            {id: 'web_worker', name: 'Web Workers', count: 10, icon: 'cogs', color: '#ff0080'},
            {id: 'shared_worker', name: 'Shared Workers', count: 10, icon: 'share-alt', color: '#800080'},
            {id: 'message_channel', name: 'Message Channels', count: 10, icon: 'comment', color: '#808080'},
            {id: 'fetch_api', name: 'Fetch API', count: 10, icon: 'download', color: '#008000'},
            {id: 'beacon_api', name: 'Beacon API', count: 10, icon: 'broadcast-tower', color: '#ffa500'},
            {id: 'image_capture', name: 'Image Capture', count: 5, icon: 'camera', color: '#ff1493'},
            {id: 'presentation_api', name: 'Presentation API', count: 5, icon: 'tv', color: '#4682b4'},
            {id: 'web_share_api', name: 'Web Share API', count: 5, icon: 'share-alt', color: '#dc143c'},
            {id: 'web_bluetooth', name: 'Web Bluetooth', count: 5, icon: 'bluetooth', color: '#2f4f4f'},
            {id: 'web_usb', name: 'Web USB', count: 5, icon: 'usb', color: '#708090'},
            {id: 'web_serial', name: 'Web Serial', count: 5, icon: 'serial-port', color: '#000000'},
            {id: 'web_nfc', name: 'Web NFC', count: 5, icon: 'wifi', color: '#32cd32'},
            {id: 'webxr', name: 'WebXR', count: 5, icon: 'vr-cardboard', color: '#8b008b'},
            {id: 'file_api', name: 'File API', count: 10, icon: 'file', color: '#ff4500'},
            {id: 'drag_drop_advanced', name: 'Drag & Drop Advanced', count: 11, icon: 'arrows-alt', color: '#800000'},
            {id: 'clipboard_advanced', name: 'Clipboard Advanced', count: 15, icon: 'clipboard', color: '#264de4'},
            {id: 'web_share_advanced', name: 'Web Share Advanced', count: 5, icon: 'share-alt', color: '#f16529'}
        ],
        
        payloads: {
            // Blind payloads will be loaded from xss-payloads.js
        }
    },
    
    dom: {
        name: "DOM XSS",
        description: "DOM-based XSS using location manipulation, hash changes, postMessage, storage, and DOM manipulation",
        totalPayloads: 200,
        categories: [
            {id: 'location', name: 'Location Manipulation', count: 20, icon: 'map-marker-alt', color: '#ff0000'},
            {id: 'hash', name: 'Hash Changes', count: 17, icon: 'hashtag', color: '#ff6600'},
            {id: 'name', name: 'Window Name', count: 10, icon: 'tag', color: '#ffff00'},
            {id: 'postMessage', name: 'PostMessage', count: 10, icon: 'comment', color: '#00ff00'},
            {id: 'localStorage', name: 'LocalStorage', count: 10, icon: 'save', color: '#0080ff'},
            {id: 'sessionStorage', name: 'SessionStorage', count: 10, icon: 'save', color: '#ff0080'},
            {id: 'cookies', name: 'Cookies', count: 10, icon: 'cookie', color: '#800080'},
            {id: 'document_write', name: 'Document Write', count: 15, icon: 'pen', color: '#808080'},
            {id: 'open_method', name: 'Window Open', count: 15, icon: 'window-maximize', color: '#008000'},
            {id: 'eval_location', name: 'Eval Location', count: 14, icon: 'crosshairs', color: '#ffa500'},
            {id: 'window_object', name: 'Window Object', count: 12, icon: 'window-restore', color: '#ff1493'},
            {id: 'document_object', name: 'Document Object', count: 15, icon: 'file', color: '#4682b4'},
            {id: 'location_object', name: 'Location Object', count: 12, icon: 'location-arrow', color: '#dc143c'},
            {id: 'history_object', name: 'History Object', count: 10, icon: 'history', color: '#2f4f4f'},
            {id: 'mutation_observer', name: 'Mutation Observer', count: 10, icon: 'dna', color: '#708090'},
            {id: 'intersection_observer', name: 'Intersection Observer', count: 10, icon: 'eye', color: '#000000'},
            {id: 'resize_observer', name: 'Resize Observer', count: 10, icon: 'arrows-alt', color: '#32cd32'},
            {id: 'performance_observer', name: 'Performance Observer', count: 10, icon: 'tachometer-alt', color: '#8b008b'},
            {id: 'setTimeout_interval', name: 'SetTimeout/Interval', count: 17, icon: 'clock', color: '#ff4500'},
            {id: 'function_constructor', name: 'Function Constructor', count: 12, icon: 'cog', color: '#800000'},
            {id: 'eval_based', name: 'Eval Based', count: 14, icon: 'code', color: '#264de4'},
            {id: 'dom_manipulation', name: 'DOM Manipulation', count: 15, icon: 'sitemap', color: '#f16529'}
        ],
        
        payloads: {
            // DOM payloads will be loaded from xss-payloads.js
        }
    },
    
    custom: {
        name: "Custom Payloads",
        description: "User-defined custom XSS payloads",
        totalPayloads: 0,
        categories: [
            {id: 'user_defined', name: 'User Defined', count: 0, icon: 'user', color: '#00ff00'}
        ],
        
        payloads: {
            // Custom payloads will be loaded from user input
        }
    }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { XSS_METHODS };
          }
