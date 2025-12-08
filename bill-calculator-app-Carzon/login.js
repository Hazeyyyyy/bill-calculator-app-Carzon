document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".loginform");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.querySelector("input[name='username']").value.trim();
        const password = document.querySelector("input[name='password']").value.trim();

        // Load account from localStorage
        const savedAccount = JSON.parse(localStorage.getItem("userAccount"));

        if (!savedAccount) {
            alert("No account found. Please register first.");
            return;
        }

        if (username === savedAccount.username && password === savedAccount.password) {
            alert("Login successful!");
            window.location.href = "dashboard.html";
        } else {
            alert("Incorrect username or password.");
        }
    });
});