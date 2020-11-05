var bannerEl = document.getElementById("banner")
var timerEl = document.getElementById("timer")
var buttonEl = document.getElementById("start-button")
var secondsLeft = 70


function timer(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Timer: "+ secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            window.location.href = "HighScores.html"
        }
    }, 1000)
}

buttonEl.addEventListener("click", function(){
    timer()
})
// timer()
// console.log(timerEl)