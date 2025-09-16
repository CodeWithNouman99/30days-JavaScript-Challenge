let input=document.getElementById("inputBox")
let buttons=document.querySelectorAll('button')
let string="";
let arr=Array.from(buttons)
arr.forEach(button=>
{
    button.addEventListener('click',(e)=>
    {
        if(e.target.innerHTML=='=')
        {
            string=eval(string)
            input.value=string;
        }
        else if(e.target.innerHTML=='AC')
        {
            string=""
            input.value=string
        }
        else if(e.target.innerHTML=='DEL'){
            string = string.slice(0, -1);
            input.value=string
        }
        else{
        string+=e.target.innerHTML
        input.value=string
        }
    })
}
)


                                //Mistakes:

 //❌ Mistake (Galat)                                           | ✅ Correct (Sahi)                                                                            | 📌 Difference / Note                                                                                            |
// ----------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
 //`document.querySelector("inputBox")`                        | `document.querySelector("#inputBox")` <br> ya `document.getElementById("inputBox")`         | `querySelector` ko CSS selector chahiye hota hai. Id select karne ke liye `#` lagana zaroori hai.               |
//| `//document.querySelector("button")`                          | `document.querySelectorAll("button")`                                                       | `querySelector` sirf **pehla element** deta hai. `querySelectorAll` sabhi buttons deta hai (NodeList).        |
//| `e.target.value` (jab button me `value` attribute nahi hai) | `e.target.innerHTML`                                                                        | `innerHTML` = jo button ke andar likha hai. <br> `value` = sirf tab chalega jab `<button value="...">` diya ho. |
//| `string = string.slice(0.-1)`                               | `string = string.slice(0, -1)`                                                              | `slice(0, -1)` ka matlab hai "string ke last character ko remove karna". `0.-1` syntax error hai.               |
//| `arr.forEach(button) { ... }`                               | `arr.forEach(button => { ... })`                                                            | `forEach` ko hamesha function (ya arrow function) ke sath likhna padta hai.                                     |
//| Dono jagah `string` aur `input.value` ko mila kar use karna | Ek hi source use karo → ya to `string` maintain karo, ya direct `input.value` par kaam karo | Dono ko mila kar use karna confusing ho jata hai. Simple approach rakho.                                        |


                                                    // Program Statements:

//Q:1 Print numbers from 1 to 10?

for(let i=1;i<=10;i++)
{
    console.log(i)
}


//Q2: Find the sum of first 10 natural numbers
let sum=0
for(let i=1;i<=10;i++)
{
    sum=sum+i
}
console.log(sum)