window.calculateBill = function () {
    const monthEl = document.getElementById("month");
    const consumptionEl = document.getElementById("consumption");
    const costEl = document.getElementById("cost");
    const totalEl = document.getElementById("totalBill");

    if (!monthEl || !consumptionEl || !costEl || !totalEl) return;

    const month = monthEl.value.trim();
    const consumptionRaw = consumptionEl.value.trim();
    const costRaw = costEl.value.trim();

    if (month === "" || consumptionRaw === "" || costRaw === "") {
        alert("Please fill all fields.");
        return;
    }

    const consumption = parseFloat(consumptionRaw);
    const cost = parseFloat(costRaw);

    if (isNaN(consumption) || isNaN(cost) || consumption <= 0 || cost <= 0) {
        alert("Please enter valid positive numbers for consumption and cost.");
        return;
    }

    const total = consumption * cost;
    totalEl.value = total.toFixed(2);

    const account = JSON.parse(localStorage.getItem("userAccount"));
    if (account) {
        const latest = {
            month: month,
            consumption: consumptionRaw,
            cost: costRaw,
            total: total.toFixed(2)
        };
        localStorage.setItem(`latestBill_${account.username}`, JSON.stringify(latest));
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const calcBtn = document.querySelector(".calbtn");
    if (calcBtn) {
        calcBtn.addEventListener("click", function () {
            window.calculateBill();
        });
    }

    const saveBtn = document.querySelector(".savebtn");
    if (saveBtn) {
        saveBtn.addEventListener("click", function () {
            const month = document.getElementById("month").value.trim();
            const consumption = document.getElementById("consumption").value.trim();
            const cost = document.getElementById("cost").value.trim();
            const total = document.getElementById("totalBill").value.trim();

            if (month === "" || consumption === "" || cost === "" || total === "") {
                alert("Please calculate first before saving.");
                return;
            }

            const account = JSON.parse(localStorage.getItem("userAccount"));
            if (!account) return;

            const saved = JSON.parse(localStorage.getItem(`billResults_${account.username}`)) || [];

            saved.unshift({
                month: month,
                consumption: consumption,
                cost: cost,
                amount: total
            });

            localStorage.setItem(`billResults_${account.username}`, JSON.stringify(saved));

            alert("Result saved!");
        });
    }
});