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
                f1:"timer()", f2:"setTime", f3:".setMoment", a:".setInterval"  },
                {q:"What are the some primitive data types in Javascript?", 
                f1:"Objects, Strings, Arrays, Methods", a:"Strings, Numbers, Boleans, Undefined", f2:"Arrays, Querys, Id's, Classes", f3:"Boleans, Arrays, Functions, Methods"},
                {q:'What data type is this variable using?   var = "true"',
                a:"String", f1:"Bolean", f2:"Number", f3:"Character"},
                {q:"What question will give me a Bolean Data Type response",
                f1:'prompt("What is your favorite car?")', f2:'alert("Do you like oranges?")', a:'confirm("Do you like apples?")', f3:'prompt("Do you like cofee?")'},
                {q:"What question will give me a String Data type response?",
                f1:'confirm("Do you like apples?")', f2:'alert("What is your favorite food?")', f3:'confirm("How old are you?")', a:'prompt("What color are your eyes?"'},
                {q:"Which one of these loops will return the value of Woohoo?",
                f1:"else(win)[return Woohoo]", a:"if(win){return Woohoo}", f2:"for(win)[return Woohoo]", f3:"when(win)(return Woohoo"},

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

// function buttons2(){
//     var answers = Object.keys(questions[0])
    
//     var buttonsDiv = document.getElementById("buttDiv")
//     var buttons = document.createElement("button")
//     buttonsDiv.appendChild(buttons)
//     for (var i = 0, len = answers.length; i < len; i++){
//     buttons.textContent = questions[0][answers[i]]
//     console.log(answers[i])}
//     // if()


// }

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
    
    // console.log(questions)
    buttons() 
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
                  delay = 2
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