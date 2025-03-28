document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    
    // DOM references
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMe = document.getElementById('remember-me');
    const forgotPasswordLink = document.getElementById('forgot-password');
    const signupBtn = document.getElementById('signup-btn');

    // Load remembered username
    if (localStorage.getItem('rememberedUsername')) {
        usernameInput.value = localStorage.getItem('rememberedUsername');
        rememberMe.checked = true;
    }

    // Login form submission
    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            try {
                const response = await fetch('login.php', {  // Changed from api/login.php
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                
                // First get response as text
                const responseText = await response.text();
                let data;
                
                try {
                    data = JSON.parse(responseText);
                } catch (e) {
                    console.error('Failed to parse JSON:', responseText);
                    throw new Error('Invalid server response');
                }

                if (!response.ok) {
                    throw new Error(data.message || `Server error: ${response.status}`);
                }
                
                if (data.success) {
                    if (rememberMe.checked) {
                        localStorage.setItem('rememberedUsername', username);
                    } else {
                        localStorage.removeItem('rememberedUsername');
                    }
                    window.location.href = 'dashboard.html';
                } else {
                    alert(data.message || 'Login failed');
                }
            } catch (error) {
                console.error('Login error:', error);
                alert(error.message || 'An error occurred. Please try again.');
            }
        });
    }

    // Forgot Password link
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = "./forgot_password.html";
        });
    }

    // Signup button
    if (signupBtn) {
        signupBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = './signup.html';
        });
    }
});