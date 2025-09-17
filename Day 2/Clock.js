function updateClock() {
  let now = new Date();
  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');

  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

// Update every second
setInterval(updateClock, 1000);

// Initial call
updateClock();






                                        // Problem Statements:
// Q 3: Reverse a string
let arr=["n","o","u","m","a","n"]
console.log(arr.reverse())

//Q 4: Check if a number is even or odd
const input=Number (prompt("Enter a number"))
if(input%2==0)
{
    console.log("Number is Even")
}
else{
    console.log("Number is Odd")
// }