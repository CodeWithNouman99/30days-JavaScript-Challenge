const balance = document.getElementById("balance");
const moneyplus = document.getElementById("money-plus");
const moneyminus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

let transactions = [];

// Add transaction
function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("Please enter text and amount");
  } else {
    const transaction = {
      id: generateId(),
      text: text.value,
      amount: +amount.value
    };

    transactions.push(transaction);
    addtransactions(transaction);
    updatevalues();

    text.value = "";
    amount.value = "";
  }
}

// Generate ID
function generateId() {
  return Math.floor(Math.random() * 100000);
}

// Add transaction DOM
function addtransactions(transaction) {
  const sign = transaction.amount < 0 ? "-" : "+";

  const item = document.createElement("li");
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");

  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
  `;

  list.appendChild(item);
}
//Remove transaction
function removeTransaction(id)
{
    transactions=transactions.filter(transactions=> transactions.id!== id)
    Init()
}
// Update balance, income, expense
function updatevalues() {
  const amounts = transactions.map(t => t.amount);

  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
  const income = amounts.filter(item => item > 0)
                        .reduce((acc, item) => acc + item, 0)
                        .toFixed(2);
  const expense = amounts.filter(item => item < 0)
                         .reduce((acc, item) => acc + item, 0) * -1
                         .toFixed(2);

  balance.innerText = `$${total}`;
  moneyplus.innerText = `$${income}`;
  moneyminus.innerText = `$${expense}`;
}

// Init app
function Init() {
  list.innerHTML = "";
  transactions.forEach(addtransactions);
  updatevalues();
}

Init();

form.addEventListener("submit", addTransaction);



                                        // Program Statements:
//Q 25:Find average of numbers in array
const numbers = [10, 20, 30, 40, 50];
const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
console.log("Average:", average);


//Q 26:Capitalize first letter of each word
const str = "hello world from nouman";
const capitalized = str
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(capitalized);
