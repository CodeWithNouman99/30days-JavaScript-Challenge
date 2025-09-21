const questions = [
  {
    question: "What is the capital city of Australia?",
    answer: [
      { Text: "Sydney", correct: false },
      { Text: "Melbourne", correct: false },
      { Text: "Canberra", correct: true },
      { Text: "Perth", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: [
      { Text: "Earth", correct: false },
      { Text: "Mars", correct: true },
      { Text: "Jupiter", correct: false },
      { Text: "Venus", correct: false }
    ]
  },
  {
    question: "Who developed the theory of relativity?",
    answer: [
      { Text: "Isaac Newton", correct: false },
      { Text: "Albert Einstein", correct: true },
      { Text: "Galileo Galilei", correct: false },
      { Text: "Nikola Tesla", correct: false }
    ]
  },
  {
    question: "What is the largest mammal in the world?",
    answer: [
      { Text: "Elephant", correct: false },
      { Text: "Blue Whale", correct: true },
      { Text: "Giraffe", correct: false },
      { Text: "Orca", correct: false }
    ]
  },
  {
    question: "Which country invented paper?",
    answer: [
      { Text: "India", correct: false },
      { Text: "China", correct: true },
      { Text: "Egypt", correct: false },
      { Text: "Greece", correct: false }
    ]
  },
  {
    question: "What is the chemical symbol for Gold?",
    answer: [
      { Text: "G", correct: false },
      { Text: "Go", correct: false },
      { Text: "Au", correct: true },
      { Text: "Ag", correct: false }
    ]
  },
  {
    question: "Which language is the most spoken worldwide?",
    answer: [
      { Text: "English", correct: false },
      { Text: "Hindi", correct: false },
      { Text: "Mandarin Chinese", correct: true },
      { Text: "Spanish", correct: false }
    ]
  },
  {
    question: "What is the fastest land animal?",
    answer: [
      { Text: "Lion", correct: false },
      { Text: "Tiger", correct: false },
      { Text: "Cheetah", correct: true },
      { Text: "Leopard", correct: false }
    ]
  },
  {
    question: "In computing, what does 'CPU' stand for?",
    answer: [
      { Text: "Central Program Unit", correct: false },
      { Text: "Central Processing Unit", correct: true },
      { Text: "Computer Personal Unit", correct: false },
      { Text: "Control Program Utility", correct: false }
    ]
  },
  {
    question: "Who painted the Mona Lisa?",
    answer: [
      { Text: "Vincent van Gogh", correct: false },
      { Text: "Pablo Picasso", correct: false },
      { Text: "Leonardo da Vinci", correct: true },
      { Text: "Michelangelo", correct: false }
    ]
  }
];
const questionElement=document.getElementById("question")
const answerbutton=document.getElementById("answer-buttons")
const nextbutton=document.getElementById("next-btn")

let currentQuestionIndex=0
let score=0

function startQuiz()
{
  currentQuestionIndex=0
  score=0
  nextbutton.innerHTML="Next"
  showQuestion()
}

function showQuestion()
{
  resetstate()
  let currentQuestion=questions[currentQuestionIndex]
  let questionNo=currentQuestionIndex+1
  questionElement.innerHTML=questionNo + "."+ currentQuestion.question

  currentQuestion.answer.forEach(answer=>
  {
    const button=document.createElement("button")
    button.innerHTML=answer.Text
    button.classList.add("btn")
    answerbutton.appendChild(button)
    if(answer.correct)
    {
      button.dataset.correct=answer.correct
    }
    button.addEventListener("click",(selectAnswer))
  }
  )
}


function resetstate()
{
  nextbutton.style.display="none"
  while(answerbutton.firstChild)
  {
    answerbutton.removeChild(answerbutton.firstChild)
  }
}
function selectAnswer(e)
{
  const selectBtn=e.target
  const isCorrect=selectBtn.dataset.correct ==="true"
  if(isCorrect)
  {
    selectBtn.classList.add("correct")  
    score++  
  }
  else{
    selectBtn.classList.add("incorrect")
  }
  Array.from(answerbutton.children).forEach(button=>
  {
    if(button.dataset.correct==="true")
    {
      button.classList.add("correct")      
    }
    button.disabled= true
  }
  )
  nextbutton.style.display="block"
}
function showScore()
{
  resetstate()
  questionElement.innerHTML=`you scored ${score} out of ${questions.length}`
  nextbutton.innerHTML="Play Again"
  nextbutton.style.display="block"
}
function handlenextButton()
{
  currentQuestionIndex++
  if(currentQuestionIndex<questions.length)
  {
    showQuestion()
  }
  else
  {
    showScore()
  }
}
nextbutton.addEventListener("click",()=>
{
  if(currentQuestionIndex<questions.length)
  {
    handlenextButton()
  }
  else{
    startQuiz()
  }
})
startQuiz()



                                          // program Statements:
// Q 13:  Check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false


//Q 14:  Remove duplicates from an array
let arr = [1, 2, 3, 2, 4, 5, 1, 6];
let unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3, 4, 5, 6]