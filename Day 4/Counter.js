const minus=document.getElementById("minus")
const plus=document.getElementById("plus")
const reset=document.getElementById("reset")
const score=document.getElementById("score")
var counter=0
minus.addEventListener("click",(e)=>
{
    counter=counter-1
    score.innerHTML=counter
    saveCounter()
})
reset.addEventListener("click",(e)=>
{
    counter= 0
    score.innerHTML=counter
    saveCounter()
})
plus.addEventListener("click",(e)=>
{
    counter=counter+1
    score.innerHTML=counter
    saveCounter()
})


// Load saved counter from localStorage (if available)
let  count = parseInt(localStorage.getItem("counter")) || 0;
score.innerHTML = counter;

// Function to save counter value
function saveCounter() {
  localStorage.setItem("counter", count);
}


                                                // Program Statements:
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false



//Note: 
/*
A palindrome is a word, number, phrase, or sequence that reads the same forwards and backwards.

For example:

Words:

"madam" → same forwards and backwards
"level"
"racecar"
Numbers:
*/

function fibonacci(n) {
  let a = 0, b = 1;
  console.log(a); // first term
  console.log(b); // second term
  for (let i = 2; i < n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}

fibonacci(10);

//Note:
/*
The Fibonacci series is a sequence of numbers where:

The first two numbers are 0 and 1.

Every next number is the sum of the previous two numbers.
*/