// Day 5 - Last Day of Week 1 : Expense Tracker Dashboard (Integration)

// Expense List
const expenseTracker = [
    { category: 'Drinks', amount: 50 },
    { category: 'Fruit & Vegetables', amount: 25 },
    { category: 'Treats', amount: 75 },
];

// DOM Elements
const table = document.getElementById('expenseTable');
const catInput = document.getElementById('categoryInput');
const amtInput = document.getElementById('amountInput');
const submitBtn = document.getElementById('submitBtn'); // An idea that came to me to disable the button until valid inputs are given "I will implement it later"


// Render initial table and total
renderTable(expenseTracker);
updateTotal(expenseTracker);

// --- FUNCTIONS ---

function renderTable(d) {

    catInput.value = '';
    amtInput.value = '';

    let html = `
        <tr>
            <th>Category</th>
            <th>Amount</th>
        </tr>
    `;

    d.forEach(expense => {
        html += `
            <tr>
                <td>${expense.category}</td>
                <td>${expense.amount}</td>
            </tr>
        `;
    });

    table.innerHTML = html;
}   


function addExpense() {

    const category = catInput.value.trim();
    const amount = parseInt(amtInput.value.trim());

    if (!category || isNaN(amount) || amount <= 0 ) {
        alert("Invalid expense entry.");
        return;
    }

    if (category === "Drinks" || category === "Fruit & Vegetables" || category === "Treats" || category === "Red meat") {
    expenseTracker.push({ category, amount });
    }

    else {
        alert("Please enter a valid category: Drinks, Fruit & Vegetables, Treats, Red meat");
        return;
    }

    // Update UI
    renderTable(expenseTracker);
    updateTotal(expenseTracker);

    // Clear inputs
    catInput.value = '';
    amtInput.value = '';
}

function getTotalExpenses(data) {
    return data.reduce((total, expense) => total + expense.amount, 0);
}

function updateTotal(totalData) {
    const total = getTotalExpenses(totalData);
    const totalDisplay = document.getElementById('totalExpenses');
    totalDisplay.textContent = `Total Expenses: ${total}`; 
}


function getCategorySummary() {
    const summary = {};
    expenseTracker.forEach(expense => {
        if (!summary[expense.category]) {
            summary[expense.category] = 0;
        }
        summary[expense.category] += expense.amount;
    });

    renderTable(Object.entries(summary).map(([category, amount]) => ({ category, amount })));
}

function filterByCat() {

    const selectedValue = document.getElementById('filterSelect').value;

    const categoryMap = {
        cat01: 'Drinks',
        cat02: 'Fruit & Vegetables',
        cat03: 'Treats',
        cat04: 'Red meat',
    };

    const categoryName = categoryMap[selectedValue];

    if (!categoryName) {
        table.innerHTML = '';
    }

    const filtered = expenseTracker.filter(expense => expense.category === categoryName);

    renderTable(filtered);
    updateTotal(filtered);

}

function filterByAmount() {
    const filter = expenseTracker.sort((a, b) => b.amount - a.amount);    
    renderTable(filter);
    updateTotal(filter);
}

function handleFilterChange() {
    const filterSelect = document.getElementById('filterSelect');
    const selectedValue = filterSelect.value;

    if (selectedValue === 'amount') {
        filterByAmount();
    } else if (selectedValue === 'general') {
        renderTable(expenseTracker); 
    } else {
        filterByCat();
    }
}


// Task C : Combine your Expense Tracker with Shopping Cart totals for a weekly spending summary.
    // waiting for Rana's help :))