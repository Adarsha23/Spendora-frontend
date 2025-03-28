document.getElementById("resetForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    
    // Get form elements
    const email = document.getElementById("email").value.trim();
    const recoveryCode = document.getElementById("recovery_code").value.trim();
    const newPassword = document.getElementById("new_password").value;
    const confirmPassword = document.getElementById("confirm_password")?.value; // Optional field
    const messageEl = document.getElementById("message");

    // Clear previous messages
    messageEl.textContent = "";
    messageEl.style.color = "";

    // Client-side validation
    if (!email || !recoveryCode || !newPassword) {
        showError("All fields are required");
        return;
    }

    if (newPassword.length < 6) {
        showError("Password must be at least 6 characters");
        return;
    }

    if (confirmPassword && newPassword !== confirmPassword) {
        showError("Passwords don't match");
        return;
    }

    try {
        const response = await fetch("reset_password.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                email, 
                recovery_code: recoveryCode, 
                password: newPassword 
            })
        });

        // Handle non-JSON responses
        const responseText = await response.text();
        let data;
        
        try {
            data = JSON.parse(responseText);
        } catch {
            throw new Error("Invalid server response");
        }

        if (!response.ok) {
            throw new Error(data.message || "Password reset failed");
        }

        // Success case
        messageEl.textContent = data.message || "Password updated successfully!";
        messageEl.style.color = "green";
        
        // Redirect to login after 2 seconds
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);

    } catch (error) {
        showError(error.message || "An error occurred. Please try again.");
        console.error("Reset error:", error);
    }

    function showError(message) {
        messageEl.textContent = message;
        messageEl.style.color = "red";
    }
});