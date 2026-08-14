// ===== Part 1: Store Expenses as an Array of Objects =====

let expenses = [
  { name: "Rent", amount: 500, category: "Housing" },
  { name: "Food", amount: 90, category: "Food" },
  { name: "Transport", amount: 45, category: "Transport" },
  { name: "Internet", amount: 60, category: "Utilities" },
  { name: "Entertainment", amount: 120, category: "Entertainment" },
  { name: "Utilities", amount: 75, category: "Utilities" }
];

console.log(expenses);
// ===== Part 2: Calculate Total Expenses =====

function calculateTotal(expenseArray) {
  let total = 0;

  for (let i = 0; i < expenseArray.length; i++) {
    total += expenseArray[i].amount;
  }

  return total.toFixed(2);
}

console.log("Total Expenses: $" + calculateTotal(expenses));
// ===== Part 3: Render Expenses to the DOM =====

function renderExpenses(expenseArray) {
  const tableBody = document.getElementById("expense-table-body");
  tableBody.innerHTML = ""; // clear existing rows

  for (let i = 0; i < expenseArray.length; i++) {
    const expense = expenseArray[i];

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${expense.name}</td>
      <td>$${expense.amount.toFixed(2)}</td>
      <td>${expense.category}</td>
    `;

    tableBody.appendChild(row);
  }

  document.getElementById("total-display").textContent = calculateTotal(expenseArray);
}

renderExpenses(expenses);
// ===== Part 4: Wire Up the Form with Events =====

const addExpenseBtn = document.getElementById("add-expense-btn");

addExpenseBtn.addEventListener("click", function () {
  const nameInput = document.getElementById("name-input");
  const amountInput = document.getElementById("amount-input");
  const categoryInput = document.getElementById("category-input");

  const newExpense = {
    name: nameInput.value,
    amount: parseFloat(amountInput.value),
    category: categoryInput.value
  };

  expenses.push(newExpense);

  renderExpenses(expenses);

  nameInput.value = "";
  amountInput.value = "";
  categoryInput.value = "";
});