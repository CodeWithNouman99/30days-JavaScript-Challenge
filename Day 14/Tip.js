const btn = document.getElementById("calculate-btn");

btn.addEventListener("click", () => {
  let billamount = parseFloat(document.getElementById("bill-amount").value) || 0;
  let tippercentage = parseFloat(document.getElementById("Tip-percentage").value) || 0;

  // Calculate tip
  let Tipamount = (billamount * tippercentage) / 100;

  // Show tip in the input
  document.getElementById("Tip-amount").value = Tipamount.toFixed(2);

  // Total = bill + tip
  document.getElementById("Total-amount").value = (billamount + Tipamount).toFixed(2);
});


                                            //Program Statements:
//Q27:Find gcd of two numbers
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Example:
console.log(gcd(56, 98)); // 14


//Q 28: Check leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Example:
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false