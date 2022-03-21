/********************/
// DEFINE letIABLES
/********************/
//start quiz letiables
let startButtonEl = document.querySelector('#start-button');
let introEl = document.querySelector('#intro')
//timer letiables
const startingMinutes = 2;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('time');

let questionIdCounter = 0;

let quizWrapperEl = document.querySelector('#quiz-wrapper')
// ***********************************//
//QUESTION ARRAY
let allQuestions = [
    {
    question: "What is not a primitive Data Type in JavaScript?",
    choices: [  "Boolean",
                "String",
                "Float",
                "Char"],
    correctAnswer: 1 //index of the correct answer 'string'
    },
    {
    question: "Which element does JavaScript get entered into?",
    choices: [  "<scripting>",
                "<body>",
                "<javascript>",
                "<script>"],
    correctAnswer: 2 //index of the correct answer 'script'
    },
    {
    question: "What is a useful tool used during development and debugging for printing content to the debugger?",
    choices: [  "JavaScript",
                "terminal/bash",
                "alerts",
                "console.log"],
    correctAnswer: 3 //index of the correct answer 'console.log'
    },
    {
    question: "String values must be enclosed within what when being assigned to variables?",
   choices: [  "parenthesis",
                "curly brackets",
                "quotes",
                "commas"],
    correctAnswer: 2 //index of the correct answer "quotes"
    },
    {
    question: "When writing an 'if/else' statement, what is the condition enclosed in?",
    choices: [  "curly brackets",
                "square brackets",
                "quotes",
                "parentheses"],
    correctAnswer: 3 //index of the correct answer 'parentheses'
    },
]
//function that starts once 'Start' Button is clicked
let startQuizHandler = function(event){
  //debugger;
 event.preventDefault(); //prevents default browser settings from reloading the browser
//console.log(event.target)
introEl.remove();
createQuestion(questionIdCounter);
}
function startTimer(){

  
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;

  //setInterval(startTimer, 1000);
}

function createQuestion(){
  
     //create question header
    let questionWrapperEl = document.createElement("div");
   
    questionWrapperEl.className = "question-wrapper";
    //add question id as a custom attribute
    questionWrapperEl.setAttribute("data-question-id",questionIdCounter);

    let questionListEl = document.createElement("ol");
    questionListEl.className = "quiz-question";

    let questionHeaderEl = document.createElement("lh");
    questionHeaderEl.className = "question";

    let choiceLi1 = document.createElement("li");
    choiceLi1.className = "choice-1";

    let choiceLi2 = document.createElement("li");
    choiceLi2.className = "choice-2";

    let choiceLi3 = document.createElement("li");
    choiceLi3.className = "choice-3";

    let choiceLi4 = document.createElement("li");
    choiceLi4.className = "choice-4";

    let choiceLi5 = document.createElement("li");
    choiceLi5.className = "choice-5";

    let buttonLi1 = document.createElement("button");
    buttonLi1.className = "choice-btn-1";

    let buttonLi2 = document.createElement("button");
    buttonLi2.className = "choice-btn-2";

    let buttonLi3 = document.createElement("button");
    buttonLi3.className = "choice-btn-3";

    let buttonLi4 = document.createElement("button");
    buttonLi4.className = "choice-btn-4";

document.body.appendChild(questionWrapperEl);
questionWrapperEl.appendChild(questionListEl);
questionListEl.appendChild(questionHeaderEl);
questionListEl.appendChild(choiceLi1);
questionListEl.appendChild(choiceLi2);
questionListEl.appendChild(choiceLi3);
questionListEl.appendChild(choiceLi4);
choiceLi1.appendChild(buttonLi1);
choiceLi2.appendChild(buttonLi2);
choiceLi3.appendChild(buttonLi3);
choiceLi4.appendChild(buttonLi4);

 
let i = questionIdCounter;
if (i < allQuestions.length) {
    console.log(allQuestions[i].question);
    questionHeaderEl.textContent = allQuestions[i].question;
    buttonLi1.textContent = allQuestions[i].choices[0];
    buttonLi2.textContent = allQuestions[i].choices[1];
    buttonLi3.textContent = allQuestions[i].choices[2];
    buttonLi4.textContent = allQuestions[i].choices[3];
    }
    
    buttonLi1.addEventListener("click", createQuestion);
    buttonLi2.addEventListener("click", createQuestion);
    buttonLi3.addEventListener("click", createQuestion);
    buttonLi4.addEventListener("click", createQuestion);

    questionIdCounter++;
}   




// creates event listener for the start button
startButtonEl.addEventListener("click", startTimer);
startButtonEl.addEventListener("click", startQuizHandler);

