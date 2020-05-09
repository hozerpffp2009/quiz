
const answerContainer = document.querySelector(".answer-track");
const options=document.querySelector(".options").children;
const questionNumberSpan = document.querySelector(".question-num-value");
const totalQuestionSpan = document.querySelector(".total-question");
const correctAnswers=document.querySelector(".correct-answers");
const totalQuest=document.querySelector(".total-questions2");
const percent=document.querySelector(".percent");
const question = document.querySelector(".question");
const op1 = document.querySelector(".option1"); 
const op2 = document.querySelector(".option2"); 
const op3 = document.querySelector(".option3"); 
const op4 = document.querySelector(".option4"); 
let questionIndex;
let index=0;
let myArray=[];
let myAr=[];
let score=0;
var userFullName = document.querySelector("#user-full-name");
var recordScore = document.querySelector("#user-total-score");
// start timer and quiz
var startBtn = document.querySelector("#start");
startBtn.addEventListener("click", function() {
    Question();
    start_timer();
    randomQuestion();
   
});
//ask name for record keeping
function Question() {
    var name = prompt("Type in first and last name : ")
    if (name) {
        userFullName.textContent = name;
        // recordScore.textContent = percent;
        localStorage.setItem("name", name);
        // localStorage.setItem("percent", percent);   
        renderLastRegistered();
       
    }    
} 

function renderLastRegistered() {
    var name = localStorage.getItem("name");
    // var percent = localStorage.getItem("percent");
}


// add in timer to begin countdown
function start_timer() {
    var timer = document.getElementById("myTimer").innerHTML;
    var arr = timer.split(":");
    var hour = arr[0];
    var min = arr[1];
    var sec = arr[2];
    if (sec == 0) {
        if (min == 0) {
            if (hour == 0) {
                alert("Times Up");
                window.location.reload();

            }
            hour--;
            min = 60;
            if (hour < 10) hour = "0" + hour;
        }
        min--;
        if (min < 10) min = "0" + min;
        sec = c = 59;
    } else sec--;
    if (sec < 10) sec = "0" + sec;
    document.getElementById("myTimer").innerHTML = hour + ":" + min + ":" + sec;
    setTimeout(start_timer, 1000);
}
// questions and options with answer
const questions=[
    {
        q: "Which of the following is the correct suntax to print a page using JavaScript?",
        options: ["window print", "browser print", "navigator print", "document print"],
        answer:1
    },
    {
        q: "Which built in method combines the text of two strings and returns a new string?",
        options: ["append()", "concat()", "attach()", "None of the above"],
        answer:2
    },
    {
        q: "Which built in method reverses the order of the elements of an array?",
        options: ["changeOrder(order)", "revers()", "sort(order)", "None of the above"], 
        answer:2
    },
    {
        q: "Which of the following function of Boolean object returns a string containing the source of the Boolean object?",
        options: ["toSource()", "valueOf()", "toString()", "None of the above"],
        answer:1
    },
    {
        q: "Which of the following funtion of String object returns the characters in a string between two indexes into the string?",
        options: ["slice()", "split()", "substr()", "substring()"],
        answer:4
    }
]
// setting in question , options 
totalQuestionSpan.innerHTML=questions.length
 function load() {
    questionNumberSpan.innerHTML=index+1;
    question.innerHTML=questions[questionIndex].q;
    op1.innerHTML=questions[questionIndex].options[1];
    op2.innerHTML=questions[questionIndex].options[2];
    op3.innerHTML=questions[questionIndex].options[3];
    op4.innerHTML=questions[questionIndex].options[4];
    index++;

 }
 //check to make sure answers are right or wrong
 function check(element) {
    if (element.id == questions[questionIndex].answer) {
        element.classList.add("correct")
        score++;
       updateAnswer("correct");
       console.log('correct');
       console.log("score:" + score)
    } else {
        element.classList.add("wrong")
        updateAnswer("wrong");
        console.log('wrong');
    }
   disabledOptions()
}
// dont allow for user to select other options
function disabledOptions() {
    for (let i=0; i<options.length; i++) {
        options[i].classList.add("disabled");
        if(options[i].id==questions[questionIndex].answer) {
            options[i].classList.add("correct");
        }
    }
}

function enableOptions() {
    for (let i=0; i<options.length; i++) {
        options[i].classList.remove("disabled", "correct", "wrong");
    }
}

function validate() {
    if(!options[0].classList.contains("disabled")) {
        alert("Select a option!!")
    } else {
        enableOptions();
        randomQuestion();
    }
}

function next() {
    validate();
}
// allows questions to be randomized
 function randomQuestion() {
     let randomNumber = Math.floor(Math.random()* questions.length);
     let duplicate=0
     if (index==questions.length) {
         quizOver();
     } else if (myArray.length>0) {
        for (let i=0; i < myArray.length; i++) {
            if(myArray[i] == randomNumber) {
                duplicate = 1;
                break;
            }
        }

        if (duplicate==1) {
            randomQuestion();
        } else {
            questionIndex=randomNumber;
            load();
        }
     }
     if (myArray.length==0) {
        questionIndex = randomNumber;
        load();
        myAr.push(questionIndex);
        
        myArray.push(randomNumber);
        console.log("myAr:" + myAr);
     }
     
    
     
 }
// keep track of how many right and wrong
 function answerTrack() {
    for (let i=0; i<questions.length; i++) {
        const div = document.createElement("div")
        answerContainer.appendChild(div);
    }
 }

 function updateAnswer (className) {
     answerContainer.children[index-1].classList.add(className);
 }
// when the test is over, show score to user
 function quizOver() {
    document.querySelector(".quiz-over").classList.add("show");
    correctAnswers.innerHTML=score;
    totalQuest.innerHTML=questions.length; 
    percent.innerHTML=(score/questions.length) * 100 + '%';
 }

 function tryAgain () {
     window.location.reload();
 }

     window.onload = function() {
     
     answerTrack();

 }
