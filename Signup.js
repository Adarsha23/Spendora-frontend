document.getElementById("eye-icon").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.src = "https://cdn-icons-png.flaticon.com/512/709/709605.png"; // Eye-off icon
    } else {
        passwordInput.type = "password";
        this.src = "https://cdn-icons-png.flaticon.com/512/709/709612.png"; // Eye icon
    }
});

