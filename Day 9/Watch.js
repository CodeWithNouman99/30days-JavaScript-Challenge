const StopBtn = document.getElementById("StopBtn")
const StartBtn = document.getElementById("StartBtn")
const ResetBtn = document.getElementById("ResetBtn")
const timerdisplay = document.querySelector(".timerdisplay")  // fixed

let msec = 0
let sec = 0
let min = 0
let timer_id = null

StartBtn.addEventListener("click", function() {
    if (timer_id !== null) {
        clearInterval(timer_id)
    }
    timer_id = setInterval(startTimer, 10)   // fixed
})

StopBtn.addEventListener("click", function() {
    clearInterval(timer_id)
})

ResetBtn.addEventListener("click", function() {
    clearInterval(timer_id)
    msec = sec = min = 0   // reset values too
    timerdisplay.innerHTML = `00:00:00`
})

function startTimer() {
    msec++
    if (msec == 100) {
        msec = 0
        sec++
    }
    if (sec == 60) {
        sec = 0
        min++
    }

    let msecString = msec < 10 ? `0${msec}` : msec
    let secString = sec < 10 ? `0${sec}` : sec
    let minString = min < 10 ? `0${min}` : min

    timerdisplay.innerHTML = `${minString}:${secString}:${msecString}`
}



                                                    // Program Statements:
//Q17 :Find smallest number in an array
function findSmallest(arr) {
  return Math.min(...arr)
}

// Example:
console.log(findSmallest([5, 2, 9, 1, 7])) // 1


//Q 18: Check if two strings are anagrams
function areAnagrams(str1, str2) {
  let normalize = s => s.toLowerCase().split("").sort().join("")
  return normalize(str1) === normalize(str2)
}

// Example:
console.log(areAnagrams("listen", "silent")) // true
console.log(areAnagrams("hello", "world"))   // false
