// Get form and inputs
const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Get error spans
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

// Hide errors initially
nameError.style.display = "none";
emailError.style.display = "none";
passwordError.style.display = "none";

// Form submit event
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop form refresh

  let valid = true;

  // Validate name (not empty + only letters and spaces)
  if (nameInput.value.trim() === "" || !/^[A-Za-z\s]+$/.test(nameInput.value)) {
    nameError.style.display = "block";
    valid = false;
  } else {
    nameError.style.display = "none";
  }

  // Validate email (simple regex check)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.style.display = "block";
    valid = false;
  } else {
    emailError.style.display = "none";
  }

  // Validate password (at least 8 chars)
  if (passwordInput.value.length < 8) {
    passwordError.style.display = "block";
    valid = false;
  } else {
    passwordError.style.display = "none";
  }

  // If all fields are valid
  if (valid) {
    alert("Form submitted successfully!");
    form.reset(); // clear inputs
  }
});



                                                    // Program Statements:
//Q 9: Count vowels in a string                                                    
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Nouman")); // 3


// Q 10: Find length of an array without length property
let arr = [1, 2, 3, 4, 5];
let count = 0;
for (let _ of arr) {
  count++;
}
console.log(count); // 5
