// VARIABLES===============================================
var bannerEl = document.getElementById("banner")
var timerEl = document.getElementById("timer")
var buttonEl = document.getElementById("start_button")
var bodyEl = document.querySelector("body")
// var qButtons = document.getElementById("qdiv")
var secondsLeft = 70
var delay = 2
var x = 0
var questions = [{q:"What JavaScript method do we use to change an attribute in our HTML code?",
                  a:".setAttribute", f1:".getAttribute", f2:".attribute", f3:".changeAttribute"},
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

function buttons2(){
    var answers = Object.keys(questions[questionIndex])
    console.log(answers)
    var buttonsDiv = document.getElementById("buttDiv")
    var buttons = document.createElement("button")
    buttonsDiv.appendChild(buttons)
    for (var i = 0, len = answers.length; i < len; i++)
    buttons.textContent = answers[i]
    // if()


}

function buttons(){
    // Initial Loop and Conditionals===================
    if (x > questions.length){
        x = 0
        // return
    }
    else{
        for (let ans in questions[questionIndex]){
            if (ans !== "q"){
                // Variable Declarations=======================
                var quest = questions[questionIndex][ans]
                var buttonsDiv = document.getElementById("buttDiv")
                var buttons = document.createElement("button")
                //Appending Statements=====================
                buttonsDiv.appendChild(buttons)
                //Text Content Settings====================
                buttons.textContent = quest
                if(ans === "a"){
                    buttons.setAttribute("id", "a")
                }
                else{
                    buttons.setAttribute("id", "f")
                }
            }
        }
    }
}

function addQuestions(){
    // event.stopPropagation()
    // Variable Declarations=================
    var div = document.createElement("div")
    var intDiv = document.createElement("div")
    var question = document.createElement("h1")
    var qdiv = document.getElementById("qdiv")
    // Appending Statements===================
    qdiv.appendChild(div)
    div.appendChild(question)
    qdiv.appendChild(intDiv)
    // Attribute Settings======================
    intDiv.setAttribute("class", "question")
    intDiv.setAttribute("id", "buttDiv")
    qdiv.setAttribute("class", "divs list")
    question.setAttribute("class", "big-text")
    // Text Content Settings====================
    question.textContent = questions[questionIndex].q
    
    console.log(questions)
    buttons2() 
    x++
    }
    
function quiz(){
    // x = 1
    questionIndex = Math.floor(Math.random()* questions.length)
    bannerEl.setAttribute("style", "display:none;");
    var div = document.createElement("div");
    bodyEl.appendChild(div);
    div.setAttribute("class", "divs list");
    div.setAttribute("id", "qdiv");
    addQuestions()
    }


function buttonClicks(){

    if(event.target.tagName != "BUTTON"){
        return
    }
    else if (event.target.id === "a"){
        var correct = document.getElementById("a")
        var wrong = document.querySelectorAll("#f")
        var qButtons = document.getElementById("qdiv")
        correct.setAttribute("class", "correct")
        for (var i = 0; i < wrong.length; i++){
            wrong[i].setAttribute("class", "wrong")
        }
        clearDelay()
       function clearDelay(){
           var qDelay = setInterval(function(){
               delay--
               if(delay === 0){
                  qButtons.remove()
                  clearInterval(qDelay)
                quiz();  
                }  
            }, 1000)
        }
          
    }
    questions.splice(questionIndex, 1)
}
        // else{
        // console.log("oh no")
        //     }
        // }
        
        
    // if(event.target.id === "a"){
    //     

        // }
    
//     else if (event.target.matches("button")){
//     secondsLeft - 10
//     quiz()
//     }
//     else{
//         return
//     }
// }



buttonEl.addEventListener("click", function(){
    timer()
    quiz()
})
document.addEventListener("click", function(event){
    
 buttonClicks()
   
})

console.log(questions)