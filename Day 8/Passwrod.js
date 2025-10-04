const inputslider=document.getElementById("inputslider")
const slidervalue=document.getElementById("slidervalue")
const passBox=document.getElementById("passBox")
const lowercase=document.getElementById("lowercase")
const uppercase=document.getElementById("uppercase")
const numbers=document.getElementById("numbers")
const symbols=document.getElementById("symbols")
const genBtn=document.getElementById("genBtn")
let copyicon=document.getElementById("copyicon")
//showing input slider value
slidervalue.textContent=inputslider.value
inputslider.addEventListener("input",()=>
{
    slidervalue.textContent=inputslider.value
})

genBtn.addEventListener("click",()=>
{
    passBox.value=generatePassword()
})
let upperchar="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerchar="abcdefghijklmnopqrstuvwxyz"
let allnumber="0123456789"
let allSymbols="!@#$%^&*"

//Function to generate password
function generatePassword()
{
    let genpassword=""
    let allchars=""
    allchars +=lowercase.checked ? lowerchar : ""
    allchars +=uppercase.checked ? upperchar : ""
    allchars +=numbers.checked ? allnumber : ""
    allchars +=symbols.checked ? allSymbols : ""

    if(allchars=="" || allchars.length==0)
    {
        return genpassword
    }
    let i=1
    while(i<=inputslider.value)
    {
         genpassword+=allchars.charAt(Math.floor(Math.random()*allchars.length))
         i++   
    }   
     return genpassword
}
copyicon.addEventListener("click", () => {
    if (passBox.value !== "" && passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value)
        copyicon.innerText="Check"
        copyicon.title = "Password copied"
        setTimeout(() => {
            copyicon.innerHTML="content_copy"
            copyicon.title = ""
        }, 3000);
    }
})


//                                  Program Statements
//Q15:Find index of element in array
function findIndex(arr, element) {
  return arr.indexOf(element);
}

console.log(findIndex([10, 20, 30, 40], 30)); // Output: 2


//Q16:  Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(25)); // Output: 77
