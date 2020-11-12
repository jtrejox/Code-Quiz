// VARIABLES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
var bannerEl = document.getElementById("banner")
var timerEl = document.getElementById("timer")
var buttonEl = document.getElementById("start_button")
var bodyEl = document.querySelector("body")
var qButtons = document.getElementById("qdiv")
var secondsLeft = 70
var delay = 1
var score = 0
var qSignal = 1
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
                {q:"What question will give me a String Data Type response?",
                f1:'confirm("Do you like apples?")', f2:'alert("What is your favorite food?")', f3:'confirm("How old are you?")', a:'prompt("What color are your eyes?"'},
                {q:"Which one of these loops will return the value of Woohoo?",
                f1:"else(win)[return Woohoo]", a:"if(win){return Woohoo}", f2:"for(win)[return Woohoo]", f3:"when(win)(return Woohoo"},
                {q:"Whchi one of these variables is an valid array?",
                a:'var{"parrot", "cat", "dog"}', f1:'var animals = ["cow", "sheep", "horse"]', f2:'var["cat", "goat", "horse"', f3:'animals = ("dog, horse, pig")'},
                {q:'How would you console log the word "dog" in the following array? var = animals["cat", "dog", "parrot"]',
                f1:'console.log(animals["dog"])', f2:'console.log.animals.dog', a:'console.log(animals[1])', f3:'console.log(dog[1])'},
                {q:'How would you obtain the index number for dog in the following array?   var = animals["cat", "dog", "parrot"]',
                f1:'animals.indexOf[1]', f2:'animals(indexOf("dog"))', f3:'animals:indexOf("dog")', a:"animals.indexOf(dog)"},
                {q:'How would you alert the word "Woohoo" to the main page?',
                f1:'alert:{"Woohoo"}', a:'alert("Woohoo")', f2:'alert.Woohoo', f3:'alert = "Woohoo"' },
                {q:'How would you turn the following variable to all lowercase letters?   var x = "drinks"',
                f1:'x.lowerCase', f2:'toLowerCase(x)', f3:'x = x.lowerCase', a:'x.toLowerCase()'},
                {q:'How would you create a "for" loop?',
                a:'for(var i =0; i< 5; i++){}', f1:'for(var = 0;i< 5;i++){}', f2:'for = (var i = 0; i< 5;i++){}', f3:'for[var i = 0; i< 5;i++]{}'},
                {q:'How would you write an "if" statements that checks if 2 conditions are true?',
                f1:'if(x = 5 || y = 7){}', f2:'if[(x = 5) && (y = 7)]{}', a:'if(x = 5 && y = 7){}', f3:'if[x = 5] && [y = 7]{}'},
                {q:'How would you generate a random number using the "Math" method',
                f1:'Math.random()[ * Math.floor(3)]', a:'Math.floor(Math.random() * 3)', f2:'Math.floor(Math.random * 3)', f3:'Math.random(Math.floor{} * 3)'},
                {q:'How would you console log the second item inside the "Students1" array?   class = [Students1, Students2, Students3]',
                f1:'console.log(Students1.1)', a:'console.log(Students1[1])', f2:'console.log(Students1[2])', f3:'console.log(Students1(1))'},
                {q:'How would you insert an item called "lemons" into an empty array?',
                a:'array.push("lemons")', f1:'array = ("lemons")', f2:'push.array("lemons")', f3:'array.push = "lemons"'},
                {q:'How would you "call" a function called "changeObjects" in javascript?',
                f1:'call.changeObjects()', f2:'function(changeObjects)', f3:'call(changeObjects)', a:'changeObjects()'},
                {q:'How would you "pass" the variable "x" into the "changeObjects" function?',
                f1:'changeObjects[x]', a:'changeObjects(x)', f2:'changeObjects += x', f3:'changeObjects.x'},
                {q:' How would you console log the name of the person from the following object?   var person = {"name":"Joe", "age": 31}',
                f1:'console.log(person(name))', f2:'console.log(name(person))', a:'console.log(person.name)', f3:'console.log(person[0]'}

            ]
var highScores = []
var obj ={}

// FUNCTIONS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//FUNCTION TO CREATE THE QUIZ TIMER 
function timer(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Timer: "+ secondsLeft;
        if (secondsLeft <= 0) {
            secondsLeft = 0
            timerEl.textContent = "Timer: "+ secondsLeft;
            //Removal of questions============================
            var qButtons = document.getElementById("qdiv");
            qButtons.remove();
            endOfQuiz();
            clearInterval(timerInterval);
            return
        }
        //Added conditional to recieve a signal from the "quiz()" function to stop the timer
        
        
        else if(qSignal === 0){
            
            clearInterval(timerInterval);
            endOfQuiz();
            return
        }
    }, 1000)
}

//FUNCTION TO CREATE AND APPEND ELEMENTS OF THE QUIZ INTERFACE AND THE SELECTION OF A RANDOM QUESTION   
function quiz(){
    //Conditional to check if there are any questions left==
    if(questions.length <= 0||secondsLeft <= 0){
        
        qSignal = 0
        return
    }
    //Selection of arandom question from the questions array
    questionIndex = Math.floor(Math.random()* questions.length);
    //Removal of initial banner============================
    bannerEl.setAttribute("style", "display:none;");
    //Creation of New Elements================================
    var div = document.createElement("div");
    //Appending Statements==================================
    bodyEl.appendChild(div);
    //Element Attribute Settings=======================
    div.setAttribute("class", "divs list");
    div.setAttribute("id", "qdiv");
    addQuestions()
}

// FUNCTION TO ADD THE QUESTIONS TO THE QUIZ INTERFACE==
function addQuestions(){
    // Creation of New Elements=================
    var div = document.createElement("div");
    var intDiv = document.createElement("div");
    var question = document.createElement("h1");
    var qdiv = document.getElementById("qdiv");
    // Appending Statements===================
    qdiv.appendChild(div);
    div.appendChild(question);
    qdiv.appendChild(intDiv);
    //Element Attribute Settings======================
    intDiv.setAttribute("class", "question");
    intDiv.setAttribute("id", "buttDiv");
    qdiv.setAttribute("class", "divs list");
    question.setAttribute("class", "big-text");
    // Text Content Settings====================
    question.textContent = questions[questionIndex].q
    buttons() 
    }

//FUNCTION TO ADD BUTTONS TO THE QUIZ INTERFACE
function buttons(){
    // Initial Loop and Conditionals===================
    for (let ans in questions[questionIndex]){
        if (ans !== "q"){
            // Variable Declarations and Creation of New Elements=======================
            var quest = questions[questionIndex][ans];
            var buttonsDiv = document.getElementById("buttDiv");
            var buttons = document.createElement("button");
            //Appending Statements=====================
            buttonsDiv.appendChild(buttons);
            //Text Content Settings====================
            buttons.textContent = quest;
            //Conditionals for Element Attribute Settings====== 
            if(ans === "a"){
                buttons.setAttribute("id", "a")
            }
            else{
                buttons.setAttribute("id", "f")
            }
        }
    }
}

//FUNCTION TO CHANGE THE COLOR OF THE BUTTONS WHEN THE QUESTION IS ANSWERED
function colorButtons(){
    //Creation of New Elements===========================
    var correct = document.getElementById("a");
    var wrong = document.querySelectorAll("#f");
    //Element Attribute Settings==========================
    correct.setAttribute("class", "correct");
    for (var i = 0; i < wrong.length; i++){
        wrong[i].setAttribute("class", "wrong")
    }
}
//FUNCTION TO CREATE A DELAY BETWEEN WHEN THE QUESTION IS ANSWERED AND THE RENDERING OF A NEW QUESTION
function clearDelay(){
    //Creation of New Elements===========================
    var qButtons = document.getElementById("qdiv");
    //Interval for delay, Countdown Initialization, Removal of question answered and Rendering of new question
    var qDelay = setInterval(function(){    
        delay--;
        if(delay === 0){
            qButtons.remove();
            clearInterval(qDelay);
            delay = 1;
            questions.splice([questionIndex],1);
            quiz()
        }  
    }, 1000)
}
// FUNCTION TO HANDLE THE DIFERENT BUTTON CHOICES IN THE QUIZ INTERFACE
function buttonClick(event){
    //Conditional to limit click triggering to the buttons only
    if(event.target.tagName != "BUTTON"){
        return
    }
    //Conditional determining the behavior when the correct answer is selected
    else if (event.target.id === "a"){
        colorButtons();
        score++;
        // localStorage.setItem("score", score);
        clearDelay()
    }
    //Conditional determining the behavior when the wrong answer is selected
    else if(event.target.id === "f"){
        colorButtons();
        score--; 
        // localStorage.setItem("score", score);
        secondsLeft -= 10;
        clearDelay();
    }
} 
//FUNCTION TO RENDER SCORE AND INPUT INTIALS AT THE END OF THE QUIZ
function endOfQuiz(){
 
    //Creation of New Elements============================
    var endDiv = document.createElement("div");
    var endDivCh1 = document.createElement("div");
    var endDivCh2 = document.createElement("div");
    var endP = document.createElement("h1");
    var endLabel = document.createElement("label");
    var endInput = document.createElement("input");
    var endButton = document.createElement("button");
    //Element Attribute Settings==========================
    endDiv.setAttribute("class", "divs endDiv list endP");
    endLabel.setAttribute("for", "endInput");
    endInput.setAttribute("id", "endInput");
    endButton.setAttribute("class", "endButton");
    endInput.setAttribute("class", "endButton");
    bodyEl.appendChild(endDiv);
    endDiv.appendChild(endDivCh1);
    endDiv.appendChild(endDivCh2);
    endDivCh1.appendChild(endP);
    endDivCh2.appendChild(endLabel);
    endDivCh2.appendChild(endInput);
    endDivCh2.appendChild(endButton);
    //Text Content Settings===============================
    endP.textContent = "YOUR HIGH SCORE IS: " + score;
    endLabel.textContent = "Enter Your Initals: ";
    endButton.textContent = "Submit";
    endButton.addEventListener("click", function(){
        var initials = endInput.value;
        var storedArr = JSON.parse(localStorage.getItem("highScores"))
        console.log(highScores + "1")
        console.log(storedArr)
        if(storedArr){
            for (var i = 0; i < storedArr.length; i++){
                highScores.push(storedArr[i])
            }
        }
        obj["initials"] = initials;
        obj["score"] = score;
        highScores.push(obj)
        localStorage.setItem("highScores", JSON.stringify(highScores))
        console.log(highScores + "3")
        window.location.href = "HighScores.html"

    })
    
}

//EVENT LISTENERS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//EVENT LISTENER FOR THE "START QUIZ" BUTTON IN THE MAIN PAGE
buttonEl.addEventListener("click", function(){
    timer();
    quiz()
})
//EVENT LISTENER FOR "ANSWER" BUTTONS IN THE QUIZ INTERFACE
document.addEventListener("click", buttonClick)

// var storedArr = localStorage.getItem("highScores")
// console.log(highScores + "1")
// console.log(storedArr)