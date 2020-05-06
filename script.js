//start button with event listner
var startBtn = document.querySelector("#start");
startBtn.addEventListener("click", function () {
   
    Question();
    start_timer();
   
});
function Question() {
    var name = prompt("Type in first and last name : ")
 
} 

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



// } 
// function Answers() {
//     var answer = "window print" + "browser print";//,  "navigator print", "document print"];
//     document.getElementById("btn1", "btn2").textContent = answer;
// }



// function Question(text, choices, answer) {
//     this.text = text;
//     this.choices = choices;
//     this.answer = answer;


//     Question.prototype.correctAnswer = function (choice) {
//         return choice === this.answer;
//     }


//     this.score = 0;
//     this.quistions = questions;
//     this.questionIndex = 0;


//     Question.prototype.getquestionIndex = function () {
//         return this.questions[this.questionIndex];
//     }

//     Question.prototype.isEnded = function () {
//         return this.questions.length === this.questionIndex;
//     }

//     Question.prototype.guess = function (answer) {
//         this.questionIndex++;
//         if (this.questionIndex().correctAnswer(answer)) {
//             this.score++;
//         }
//     }

//         if (quiz.isEnded()) {
//             //showScores();
//         } else {
//             // show question
//             var element = document.getElementById("question");
//             element.innerHTML = quiz.getquestionIndex().text;

//             //show choices
//             var choices = quiz.getquestionIndex().choice;
//         }
       
        // var questions = [
        //      new Question("Which of the following is the correct suntax to print a page using JavaScript?", ["window print", "browser print", "navigator print", "document print"], "window print"),
//             new Question("Which built in method combines the text of two strings and returns a new string?" ["append()", "concat()", "attach()", "None of the above"], "concat()"),
//             new Question("Which built in method reverses the order of the elements of an array?" ["changeOrder(order)", "revers()", "sort(order)", "None of the above"], "reverse()"),
//             new Question("Which of the following function of Boolean object returns a string containing the source of the Boolean object?" ["toSource()", "valueOf()", "toString()", "None of the above"], "toSource()"),
//             new Question("Which of the following funtion of String object returns the characters in a string between two indexes into the string?" ["slice()", "split()", "substr()", "substring()"], "substring()"),
//         ];
//         var quiz = new Question(questions);
//  }

