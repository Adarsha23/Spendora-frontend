document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded - initializing signup form');

    // Get all DOM elements
    const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const eyeToggle = document.getElementById('eye-toggle');
    const errorDisplay = document.getElementById('error-message');
    const loginBtn = document.querySelector('.login-btn');

    // Debug: Verify elements exist
    if (!form || !emailInput || !usernameInput || !passwordInput || !eyeToggle || !errorDisplay) {
        console.error('Missing required form elements');
        errorDisplay.textContent = 'System error: Missing form elements. Please refresh the page.';
        return;
    }

    // Password visibility toggle
    eyeToggle.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeToggle.textContent = '👁️';
        } else {
            passwordInput.type = 'password';
            eyeToggle.textContent = '👁';
        }
    });

    // Login button redirect
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }

    // Form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        errorDisplay.textContent = '';
        
        const email = emailInput.value.trim();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Client-side validation
        if (!email) {
            showError('Email is required!', emailInput);
            return;
        }
        
        if (!validateEmail(email)) {
            showError('Please enter a valid email address!', emailInput);
            return;
        }

        if (!username) {
            showError('Username is required!', usernameInput);
            return;
        }

        if (!password) {
            showError('Password is required!', passwordInput);
            return;
        }

        if (password.length < 6) {
            showError('Password must be at least 6 characters!', passwordInput);
            return;
        }

        try {
            const response = await fetch('signup.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, username, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            if (data.success) {
                alert('Registration successful! Please login.');
                window.location.href = 'login.html';
            } else {
                showError(data.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Signup error:', error);
            showError(error.message || 'An error occurred. Please try again later.');
        }
    });

    function showError(message, inputElement = null) {
        errorDisplay.textContent = message;
        if (inputElement) {
            inputElement.focus();
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});