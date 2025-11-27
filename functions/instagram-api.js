const fetch = require('node-fetch');

// Instagram Private API endpoints
const INSTAGRAM_API = {
    base: 'https://www.instagram.com',
    login: 'https://www.instagram.com/accounts/login/ajax/',
    userInfo: 'https://www.instagram.com/api/v1/users/web_profile_info/',
    reportUser: 'https://www.instagram.com/api/v1/users/report/',
    reportContent: 'https://www.instagram.com/api/v1/media/report/'
};

exports.handler = async function(event, context) {
    const { action, data } = JSON.parse(event.body);
    
    try {
        switch (action) {
            case 'login':
                return await handleLogin(data);
            case 'getUserInfo':
                return await handleGetUserInfo(data);
            case 'reportUser':
                return await handleReportUser(data);
            default:
                return { statusCode: 400, body: JSON.stringify({ error: 'Unknown action' }) };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};

async function handleLogin(data) {
    const { username, password, twoFactorCode } = data;
    
    const headers = {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1',
        'X-Requested-With': 'XMLHttpRequest',
        'X-IG-App-ID': '936619743392459',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*',
        'Origin': 'https://www.instagram.com',
        'Referer': 'https://www.instagram.com/'
    };

    // First get CSRF token
    const csrfResponse = await fetch(INSTAGRAM_API.base, { headers });
    const csrfToken = csrfResponse.headers.get('set-cookie')?.match(/csrftoken=([^;]+)/)?.[1];
    
    if (csrfToken) {
        headers['X-CSRFToken'] = csrfToken;
    }

    const loginData = new URLSearchParams({
        username: username,
        enc_password: `#PWD_INSTAGRAM_BROWSER:0:${Date.now()}:${password}`,
        queryParams: '{}',
        optIntoOneTap: 'false'
    });

    const loginResponse = await fetch(INSTAGRAM_API.login, {
        method: 'POST',
        headers: headers,
        body: loginData,
        credentials: 'include'
    });

    const result = await loginResponse.json();
    
    if (result.status === 'ok' && result.authenticated) {
        const cookies = loginResponse.headers.get('set-cookie');
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                session: cookies,
                userId: result.userId,
                username: username
            })
        };
    } else if (result.two_factor_required) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: false,
                twoFactorRequired: true,
                twoFactorInfo: result.two_factor_info
            })
        };
    } else {
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: false,
                error: result.message || 'Login failed'
            })
        };
    }
}

async function handleGetUserInfo(data) {
    const { username, session } = data;
    
    const headers = {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1',
        'X-IG-App-ID': '936619743392459',
        'Cookie': session
    };

    const response = await fetch(`${INSTAGRAM_API.userInfo}?username=${username}`, {
        headers: headers
    });

    if (response.ok) {
        const userData = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                user: userData.data.user
            })
        };
    } else {
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: false,
                error: 'User not found'
            })
        };
    }
}

async function handleReportUser(data) {
    const { targetUserId, reason, subreason, session } = data;
    
    const headers = {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1',
        'X-IG-App-ID': '936619743392459',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': session
    };

    const reportData = new URLSearchParams({
        source_name: 'profile',
        user_id: targetUserId,
        reason_id: reason,
        subreason_id: subreason || '',
        session_id: session.match(/sessionid=([^;]+)/)?.[1] || ''
    });

    const response = await fetch(INSTAGRAM_API.reportUser, {
        method: 'POST',
        headers: headers,
        body: reportData
    });

    if (response.ok) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                reported: true
            })
        };
    } else {
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: false,
                error: 'Report failed'
            })
        };
    }
}
