const Button = document.getElementById("calculateBudget");
const resultSpace = document.getElementById("budgetResults");

Button.addEventListener("click", function () {
  const cashIn = prompt("What's your total monthly income (no commas plz)?");
  const cashOut = prompt("How much are you spending monthly?");
  const monthCount = prompt("How many months are you budgeting for?");

  try {
    const income = parseFloat(cashIn);
    const expenses = parseFloat(cashOut);
    const months = parseInt(monthCount);

    if (isNaN(income) || isNaN(expenses) || isNaN(months)) {
      throw new Error("Only use numbers gang");
    }

    const monthlySavings = income - expenses;
    const totalSavings = monthlySavings * months;

    if (monthlySavings < 0) {
      const uhOh = document.createElement("p");
      uhOh.textContent = "Alert: You're burning more money than you bring in!";
      resultSpace.appendChild(uhOh);
    }

    const cashInNote = document.createElement("p");
    const cashOutNote = document.createElement("p");
    const stashNote = document.createElement("p");

    cashInNote.textContent = `Monthly Income: $${income.toFixed(2)}`;
    cashOutNote.textContent = `Monthly Expenses: $${expenses.toFixed(2)}`;
    stashNote.textContent = `Total Projected Savings: $${totalSavings.toFixed(2)}`;

    resultSpace.appendChild(cashInNote);
    resultSpace.appendChild(cashOutNote);
    resultSpace.appendChild(stashNote);

    for (let i = 1; i <= months; i++) {
      const monthPara = document.createElement("p");
      monthPara.textContent = `Month ${i}: $${monthlySavings.toFixed(2)} saved.`;
      resultSpace.appendChild(monthPara);
    }

  } catch (err) {
    alert("Error! " + err.message);
  }
});
