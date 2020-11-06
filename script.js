// VARIABLES===============================================
var bannerEl = document.getElementById("banner")
var timerEl = document.getElementById("timer")
var buttonEl = document.getElementById("start_button")
var bodyEl = document.querySelector("body")
var secondsLeft = 70
var questions = [{q:"What JavaScript method do we use to change an attribute in our HTML code?",
                  a:".setAttribute"},
                  {q:"what JavaScript method would we use to create a timer for a timed event?",
                  a:".setInterval"  }
                ]

// FUNCTIONS===============================================
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

function addQuestions(){
    var div = document.createElement("div")
    var question = document.createElement("h1")
    var buttons = document.createElement("button")
    var qdiv = document.getElementById("qdiv")
    qdiv.appendChild(div)
    div.appendChild(question)
    question.setAttribute("class", "big-text")
    question.textContent = questions[questionIndex].q
}

function quiz(){
    x = 1
    questionIndex = Math.floor(Math.random()* questions.length)
    bannerEl.setAttribute("style", "display:none;");
    var div = document.createElement("div")
    // var question = document.createElement("h1")
    // var buttons = document.createElement("button")
    bodyEl.appendChild(div)
    // div.appendChild(div)
    // div.appendChild(question)
    div.setAttribute("class", "divs list")
    div.setAttribute("id", "qdiv")
    // question.setAttribute("class", "big-text")
    // question.textContent = questions[questionIndex].q
    addQuestions()

}



buttonEl.addEventListener("click", function(){
    timer()
    quiz()
})
console.log(bodyEl)