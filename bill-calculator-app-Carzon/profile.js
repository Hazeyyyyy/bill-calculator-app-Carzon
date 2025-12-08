document.addEventListener("DOMContentLoaded", function () {

    let account = JSON.parse(localStorage.getItem("userAccount"));

    if (!account) {
        alert("Please log in first.");
        location.href = "login.html";
        return;
    }

    document.querySelector("input[name='name']").value = account.name || "";
    document.querySelector("input[name='email']").value = account.username || "";
    document.querySelector("input[name='address']").value = account.address || "";
    document.querySelector("input[name='phone']").value = account.phone || "";

    document.querySelector(".changebtn").addEventListener("click", function () {
        alert("Password change feature coming soon.");
    });

    document.querySelector(".logoutbtn").addEventListener("click", function () {
        localStorage.removeItem("userAccount");
        alert("Logged out successfully.");
        location.href = "login.html";
    });

});