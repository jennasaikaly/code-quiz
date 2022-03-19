/********************/
// DEFINE VARIABLES
/********************/
//start quiz variables
let startButtonEl = document.querySelector('#start-button');
let introEl = document.querySelector('#intro')
//timer variables
const startingMinutes = 2;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('time');

var questionIdCounter = 0;

var quizWrapperEl = document.querySelector('#quiz-wrapper')
// ***********************************//
//QUESTION ARRAY
var allQuestions = [
    {
    question: "question 1",
    options: [  "option 1",
                "option 2",
                "option 3",
                "option 4"],
    answer: 1 //index of the correct answer
    },
    {
    question: "question 2",
    options: [  "option 1",
                "option 2",
                "option 3",
                "option 4"],
    correctAnswer: 1 //index of the correct answer
    },
    {
    question: "question 3",
    choices: [  "option 1",
                "option 2",
                "option 3",
                "option 4"],
    correctAnswer: 1 //index of the correct answer
    },
    {
    question: "question 4",
   choices: [  "option 1",
                "option 2",
                "option 3",
                "option 4"],
    correctAnswer: 1 //index of the correct answer
    },
    {
    question: "question 5",
    choices: [  "option 1",
                "option 2",
                "option 3",
                "option 4"],
    correctAnswer: 1 //index of the correct answer
    },
]


function startTimer(){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;

  //setInterval(startTimer, 1000);
}

var createQuestion = function(){
   
    //create question header
    var questionWrapperEl = document.createElement("div");
   
    questionWrapperEl.className = "question-wrapper";
    //add 
    questionWrapperEl.setAttribute("data-question-id", questionIdCounter);

    var questionListEl = document.createElement("ol");
    questionListEl.className = "quiz-question";

    var questionHeaderEl = document.createElement("lh");
    questionHeaderEl.className = "question";

    var choiceLi1 = document.createElement("li");
    choiceLi1.className = "choice-1"

    var choiceLi2 = document.createElement("li");
    choiceLi2.className = "choice-2"

    var choiceLi3 = document.createElement("li");
    choiceLi3.className = "choice-3"

    var choiceLi4 = document.createElement("li");
    choiceLi4.className = "choice-4"

questionWrapperEl.textContent = "hello"
document.body.appendChild(questionWrapperEl);
questionListEl.appendChild(choiceLi4);  
questionListEl.appendChild(choiceLi1);
questionListEl.appendChild(choiceLi2);
questionListEl.appendChild(choiceLi3);
questionListEl.appendChild(questionHeaderEl);
questionWrapperEl.appendChild(questionListEl);
quizWrapperEl.appendChild(questionWrapperEl);


}   


//function that starts once 'Start' Button is clicked
let startQuizHandler = function(event){
  //debugger;
 event.preventDefault(); //prevents default browser settings from reloading the browser
//console.log(event.target)
 introEl.remove();
createQuestion();
}

// creates event listener for the start button
startButtonEl.addEventListener("click", startTimer);
startButtonEl.addEventListener("click", startQuizHandler);

