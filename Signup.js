document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");

    eyeIcon.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            eyeIcon.src = "eye-off-icon.png"; // Change icon when visible
        } else {
            passwordInput.type = "password";
            eyeIcon.src = "eye-icon.png"; // Change icon when hidden
        }
    });
});
