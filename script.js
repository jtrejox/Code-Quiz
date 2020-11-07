// VARIABLES===============================================
var bannerEl = document.getElementById("banner")
var timerEl = document.getElementById("timer")
var buttonEl = document.getElementById("start_button")
var bodyEl = document.querySelector("body")
var secondsLeft = 70
var questions = [{q:"What JavaScript method do we use to change an attribute in our HTML code?",
                  a:".setAttribute", f1:".getAttribute", f2:".attribute", f3:".changeAttribute"},
                //   {q:"what JavaScript method would we use to create a timer for a timed event?",
                //   a:".setInterval"  }
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

function buttonsname(){



}

function buttons(){
    for (let ans in questions[0]){
        if (ans !== "q"){
            var quest = questions[0][ans]
            var buttonsDiv = document.getElementById("buttDiv")
            var buttons = document.createElement("button")
            
            buttonsDiv.appendChild(buttons)
            
            buttons.textContent = quest
        }
    }
}

function addQuestions(){
    var div = document.createElement("div")
    var intDiv = document.createElement("div")
    var question = document.createElement("h1")
    var qdiv = document.getElementById("qdiv")
    qdiv.appendChild(div)
    div.appendChild(question)
    qdiv.appendChild(intDiv)
    intDiv.setAttribute("class", "question")
    intDiv.setAttribute("id", "buttDiv")
    qdiv.setAttribute("class", "divs list")
    question.setAttribute("class", "big-text")
    question.textContent = questions[questionIndex].q
    buttons() 
    // intDiv.appendChild(buttons)
    }
    

    

// }

function quiz(){
    x = 1
    questionIndex = Math.floor(Math.random()* questions.length)
    bannerEl.setAttribute("style", "display:none;");
    var div = document.createElement("div")
    bodyEl.appendChild(div)
    div.setAttribute("class", "divs list")
    div.setAttribute("id", "qdiv")
    addQuestions()

}



buttonEl.addEventListener("click", function(){
    timer()
    quiz()
})
// console.log(questions[0])