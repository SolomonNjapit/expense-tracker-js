// ===== Part 1: Store Sample Expenses =====

let rent = 500;
let food = 90;
let transport = 45;
let internet = 60;
let entertainment = 120;
let utilities = 75;
// ===== Part 2: Flag High Spending =====

if (rent > 100) {
    console.log("Rent: High Spending");
} else {
    console.log("Rent: Normal Spending");
}

if (food > 100) {
    console.log("Food: High Spending");
} else {
    console.log("Food: Normal Spending");
}

if (transport > 100) {
    console.log("Transport: High Spending");
} else {
    console.log("Transport: Normal Spending");
}

if (internet > 100) {
    console.log("Internet: High Spending");
} else {
    console.log("Internet: Normal Spending");
}

if (entertainment > 100) {
    console.log("Entertainment: High Spending");
} else {
    console.log("Entertainment: Normal Spending");
}

if (utilities > 100) {
    console.log("Utilities: High Spending");
} else {
    console.log("Utilities: Normal Spending");
}
// ===== Part 3: Calculate Total Expenses =====

let expenses = [rent, food, transport, internet, entertainment, utilities];

let total = 0;

for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
}

console.log("Total Expenses: $" + total);
// ===== Part 4: Budget Check =====

let monthlyIncome = 800;

console.log("Monthly Income: $" + monthlyIncome);
console.log("Total Expenses: $" + total);

if (total <= monthlyIncome) {
    console.log("Status: Within Budget");
} else {
    console.log("Status: Over Budget");
}