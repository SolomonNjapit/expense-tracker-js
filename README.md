# Expense Tracker (JavaScript)

## Project Overview
A simple JavaScript-based expense tracker that stores sample expenses,
flags high-spending categories, calculates a total using a loop, and
compares that total against a monthly income to determine budget status.
All output is logged to the browser console.

## What Was Completed This Week
- **Part 1:** Created six variables representing different expense
  categories (Rent, Food, Transport, Internet, Entertainment, Utilities),
  each holding a numeric value.
- **Part 2:** Used conditional statements to check each expense
  individually and flag it as "High Spending" (over $100) or
  "Normal Spending".
- **Part 3:** Stored all six expenses in an array and used a `for` loop
  to calculate the total — no manual addition.
- **Part 4:** Created a `monthlyIncome` variable and compared it against
  the calculated total expenses, logging "Within Budget" or "Over Budget"
  depending on the result.

## How to Run
1. Open `index.html` in a browser (recommended: use the Live Server
   extension in VS Code to avoid file:// security restrictions).
2. Open the browser's Developer Tools (F12) and go to the Console tab.
3. All output — spending flags, total expenses, and budget status — will
   be printed there.

## Files
- `index.html` — minimal HTML page that loads `script.js`
- `script.js` — all JavaScript logic for this assignment
- `README.md` — this file