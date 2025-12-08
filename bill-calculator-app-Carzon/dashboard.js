document.addEventListener("DOMContentLoaded", function () {

    const account = JSON.parse(localStorage.getItem("userAccount"));
    if (!account) return;

    document.querySelector(".welcome").textContent = "Welcome, " + account.name + "!";

    const monthCards = document.querySelectorAll(".card");
    const savedResults = JSON.parse(localStorage.getItem(`billResults_${account.username}`)) || [];

    monthCards.forEach(card => {
        card.querySelector("p").textContent = "-";
        card.querySelector(".amount").textContent = "0.00";
    });

    for (let i = 0; i < monthCards.length && i < savedResults.length; i++) {
        monthCards[i].querySelector("p").textContent = savedResults[i].month;
        monthCards[i].querySelector(".amount").textContent = savedResults[i].amount;
    }
});