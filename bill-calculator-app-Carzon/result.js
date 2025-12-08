window.onload = function () {
    const account = JSON.parse(localStorage.getItem("userAccount"));
    if (!account) return;

    const results = JSON.parse(localStorage.getItem(`billResults_${account.username}`)) || [];
    const table = document.getElementById("resultTableBody");

    if (results.length === 0) {
        table.innerHTML = "<tr><td colspan='4'>No results found.</td></tr>";
        return;
    }

    table.innerHTML = "";

    results.forEach(item => {
        table.innerHTML += `
            <tr>
                <td>${item.month}</td>
                <td>${item.consumption}</td>
                <td>${item.cost}</td>
                <td>${item.amount}</td>
            </tr>
        `;
    });
};