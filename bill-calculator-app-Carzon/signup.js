document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".signupform");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.querySelector("input[name='name']").value.trim();
        const username = document.querySelector("input[name='username']").value.trim();
        const phone = document.querySelector("input[name='phone']").value.trim();
        const address = document.querySelector("input[name='address']").value.trim();
        const password = document.querySelector("input[name='password']").value.trim();
        const confirmPassword = document.querySelector("input[name='confirmpassword']").value.trim();

        if (name === "" || username === "" || password === "" || confirmPassword === "" || address === "" || phone === "") {
            alert("Please fill out all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const userData = {
            name: name,
            username: username,
            password: password,
            address: address,
            phone: phone
        };

        localStorage.setItem("userAccount", JSON.stringify(userData));

        localStorage.removeItem(`latestBill_${username}`);

        alert("Account created successfully!");
        window.location.href = "login.html";
    });
});