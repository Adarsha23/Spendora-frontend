document.addEventListener('DOMContentLoaded', () => {
    // DOM references
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMe = document.getElementById('remember-me');
    const forgotPasswordLink = document.getElementById('forgot-password');
    const signupBtn = document.getElementById('signup-btn');

    // Error message fields
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    const loginError = document.getElementById('login-error');

    // Load remembered username
    if (localStorage.getItem('rememberedUsername')) {
        usernameInput.value = localStorage.getItem('rememberedUsername');
        rememberMe.checked = true;
    }

    // Login form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Clear old errors
        usernameError.textContent = '';
        passwordError.textContent = '';
        loginError.textContent = '';

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        let hasError = false;

        // Validation
        if (username === '') {
            usernameError.textContent = 'Please enter a username.';
            hasError = true;
        }

        if (password === '') {
            passwordError.textContent = 'Please enter a password.';
            hasError = true;
        }

        if (hasError) return;

        // Dummy login check
        const dummyUsername = 'admin';
        const dummyPassword = '1234';

        if (username === dummyUsername && password === dummyPassword) {
            if (rememberMe.checked) {
                localStorage.setItem('rememberedUsername', username);
            } else {
                localStorage.removeItem('rememberedUsername');
            }

            alert('✅ Login successful!');
            // Redirect to dashboard if needed:
            // window.location.href = "dashboard.html";
        } else {
            loginError.textContent = '❌ Incorrect username or password.';
        }
    });

    // Forgot Password link clicked
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        const email = prompt("🔐 Enter your email to reset your password:");
        if (email) {
            alert(`📧 A password reset link has been sent to: ${email} (Simulated)`);
        } else {
            alert("⚠️ Please enter a valid email address.");
        }
    });

    // Sign up button clicked
    signupBtn.addEventListener('click', () => {
        // Option 1: Show a message
        // alert("📝 Redirecting to signup page...");

        // Option 2: Redirect to signup page
        window.location.href = "signup.html"; // Make sure this page exists
    });
});
