/********************/
// DEFINE letIABLES
/********************/
//start quiz letiables
let startButtonEl = document.querySelector('#start-button');
let introEl = document.querySelector('#intro')
//timer variables
let timeLeft = 75;


const countdownEl = document.getElementById('time');

let questionIdCounter = 0;
let headerQuestionEl = document.querySelector('#header-question');
let infoChoiceEl = document.querySelector('#info-choice');
let startAnswerEl = document.querySelector('#start-answer')

let quizContentEl = document.querySelector('#quiz-content');
//let quizWrapperEl = document.querySelector('#quiz-wrapper');
let answerWrapperEl = document.querySelector('#answer-wrapper');
let highScore = 0;


let scoreListContainerEl = document.querySelector('#score-list-container');
let scoreList = [];

// ***********************************//
//QUESTION ARRAY
let allQuestions = [
  {
    question: "What is not a primitive Data Type in JavaScript?",
    choices: ["Boolean",
      "String",
      "Float",
      "Char"],
    correctAnswer: "String" // 1 //index of the correct answer 'string'
  },
  {
    question: "Which element does JavaScript get entered into?",
    choices: ["<scripting>",
      "<body>",
      "<javascript>",
      "<script>"],
    correctAnswer: "<script>" //2 //index of the correct answer 'script'
  },
  {
    question: "What is a useful tool used during development and debugging for printing content to the debugger?",
    choices: ["JavaScript",
      "terminal/bash",
      "alerts",
      "console.log"],
    correctAnswer: "console.log"// 3 //index of the correct answer 'console.log'
  },
  {
    question: "String values must be enclosed within what when being assigned to variables?",
    choices: ["parenthesis",
      "curly brackets",
      "quotes",
      "commas"],
    correctAnswer: "quotes" //2 //index of the correct answer "quotes"
  },
  {
    question: "When writing an 'if/else' statement, what is the condition enclosed in?",
    choices: ["curly brackets",
      "square brackets",
      "quotes",
      "parentheses"],
    correctAnswer: "parentheses" // 3 //index of the correct answer 'parentheses'
  },
]
//function that starts once 'Start' Button is clicked
let startQuizHandler = function (event) {
  //debugger;
  event.preventDefault(); //prevents default browser settings from reloading the browser
  //console.log(event.target)
  //introEl.remove();
  document.getElementById("header-question").innerHTML = "";
  document.getElementById("info-choice").innerHTML = "";
  document.getElementById("start-answer").innerHTML = "";
  createQuestion(questionIdCounter);
}

function startTimer() {

  let interval = setInterval(function () {
    countdownEl.innerHTML = timeLeft + " seconds left";
    timeLeft = timeLeft - 1;
    if (timeLeft <= 0) {
      clearInterval(interval);
      countdownEl.innerHTML = "You are out of time!";
    };

    if (questionIdCounter === allQuestions.length) {
      clearInterval(interval);
      countdownEl.innerHTML = timeLeft + " seconds left!";
      saveScore(timeLeft);

    }

  }, 1000);
};

function createQuestion() {


  //debugger;
  document.getElementById("header-question").innerHTML = "";
  document.getElementById("info-choice").innerHTML = "";
  //document.getElementById("start-answer").innerHTML = "";
  //create question header



  //let questionWrapperEl = document.createElement("div");

  //questionWrapperEl.className = "question-wrapper";
  //add question id as a custom attribute
  //questionWrapperEl.setAttribute("data-question-id",questionIdCounter);

  let questionEl = document.createElement("h2");
  questionEl.className = "question";
  questionEl.setAttribute("data-question-id", questionIdCounter);

  let questionListEl = document.createElement("ul");
  questionListEl.className = "quiz-question";
  questionListEl.style.listStyleType = "none";
  questionListEl.style.justifyContent = "left;"

  //let questionHeaderEl = document.createElement("lh");
  //questionHeaderEl.className = "question";

  let choiceLi1 = document.createElement("li");
  choiceLi1.className = "choice-1";

  let choiceLi2 = document.createElement("li");
  choiceLi2.className = "choice-2";

  let choiceLi3 = document.createElement("li");
  choiceLi3.className = "choice-3";

  let choiceLi4 = document.createElement("li");
  choiceLi4.className = "choice-4";

  let buttonLi0 = document.createElement("button");
  buttonLi0.className = "btn choice-btn-0";


  let buttonLi1 = document.createElement("button");
  buttonLi1.className = "btn choice-btn-1";

  let buttonLi2 = document.createElement("button");
  buttonLi2.className = "btn choice-btn-2";

  let buttonLi3 = document.createElement("button");
  buttonLi3.className = "btn choice-btn-3";

  //document.body.appendChild(questionWrapperEl);
  //quizContentEl.appendChild(questionWrapperEl);
  //questionWrapperEl.appendChild(questionListEl);

  //new
  headerQuestionEl.appendChild(questionEl);
  infoChoiceEl.appendChild(questionListEl); //new

  //questionListEl.appendChild(questionHeaderEl);
  questionListEl.appendChild(choiceLi1);
  questionListEl.appendChild(choiceLi2);
  questionListEl.appendChild(choiceLi3);
  questionListEl.appendChild(choiceLi4);

  choiceLi4.appendChild(buttonLi0);
  choiceLi1.appendChild(buttonLi1);
  choiceLi2.appendChild(buttonLi2);
  choiceLi3.appendChild(buttonLi3);


  questionEl.textContent = "";
  buttonLi0.textContent = "";
  buttonLi0.textContent = "";
  buttonLi0.textContent = "";
  buttonLi0.textContent = "";

  let i = questionIdCounter;
  if (i < allQuestions.length) {
    console.log(allQuestions[i].question);
    questionEl.textContent = allQuestions[i].question;
    buttonLi0.textContent = allQuestions[i].choices[0];
    buttonLi1.textContent = allQuestions[i].choices[1];
    buttonLi2.textContent = allQuestions[i].choices[2];
    buttonLi3.textContent = allQuestions[i].choices[3];
  }

  buttonLi0.addEventListener("click", checkAnswer);
  buttonLi1.addEventListener("click", checkAnswer);
  buttonLi2.addEventListener("click", checkAnswer);
  buttonLi3.addEventListener("click", checkAnswer);
}

function checkAnswer(event) {
  //debugger;
  event.preventDefault();
  var element = event.target;
  document.getElementById("start-answer").innerHTML = "";
  let rightWrong = document.createElement("p");
  rightWrong.className = "right-wrong";
  startAnswerEl.appendChild(rightWrong);
  if (element.matches("button")) {

    if (element.textContent === allQuestions[questionIdCounter].correctAnswer) {
      rightWrong.textContent = "Correct!";
      questionIdCounter++;
    }
    else {
      rightWrong.textContent = "Wrong! You lost 10 seconds!";
      timeLeft = timeLeft - 10;
      questionIdCounter++;
    }
    createQuestion();
  }
}

function saveScore(timeLeft) {

  // check localStorage for high score, if it's not there, use 0
  var highScore = localStorage.getItem("highscore");
  if (highScore === null) {
    highScore = 0;
  }
  if (timeLeft > highScore) {
    //debugger;
    headerQuestionEl.textContent = "All Done!";
    infoChoiceEl.innerHTML = "Your final score is " + timeLeft;
    startAnswerEl.style.display = "none";

    var formEl = document.createElement("form");
    formEl.setAttribute("method", "post");
    formEl.setAttribute("action", "highscore.html");
    formEl.style.width = "400px";
    formEl.style.margin = "auto";

    var initialsEl = document.createElement("p");
    initialsEl.style.display = "inline";

    initialsEl.setAttribute("name", "initials-text");
    initialsEl.textContent = "Enter your initials:";

    // Create an input element for initials
    var initialsInput = document.createElement("input");
    initialsInput.setAttribute("type", "text");
    initialsInput.setAttribute("name", "initials");
    initialsInput.setAttribute("placeholder", "Enter your initials");
    initialsInput.style.margin = "1px 4px";
    //console.log(initialsInput);

    //var highScoreObj = {
    // initials:  initialsInput,
    // score: timeLeft


    // create a submit button
    var submitButtonEl = document.createElement("button");
    submitButtonEl.innerHTML = "Submit"

    //Append initialElement Text to the form
    formEl.appendChild(initialsEl);
    // Append the initial input to the form
    formEl.appendChild(initialsInput);
    // Append the submit button to the form
    formEl.appendChild(submitButtonEl);

  infoChoiceEl.appendChild(formEl);
   
  //document.getElementsByTagName("body")[0]
    //  .appendChild(formEl);

    initialsInput = initialsInput.value.toUpperCase();
    scoreList.push('initialsInput', timeLeft);
    // localStorage.setItem("highscore", timeLeft);
    //   localStorage.setItem("initials", initialsInput.value);



    submitButtonEl.addEventListener("click", scoreBoard());
  }
  else {
    headerQuestionEl.innerHTML = "";
    infoChoiceEl.innerHTML = "You did not beat the high score.  Please try again."
    startAnswerEl.innerHTML = "";
  }

}  // end of save score function

//function scoreBoard() {
//headerQuestionEl.textcontent = "HIGH SCORES";
 // let scoreListItemEl = document.createElement("li");
 // scoreListItemEl.className = "score-list-item";
  //scoreListItemEl.textContent = "test";
 // let highScoreListEl = document.createElement("ol");
 // highScoreListEl.className = "high-score-list";
 // infoChoiceEl.appendChild(highScoreListEl);
 // highScoreListEl.appendChild(scoreListItemEl);



  //scoreList.sort (function(a, b) {

  // return b.timeLeft - a.timeLeft;

  // });

  // for (i = 0; i < scoreList.length; i++){
  //debugger;
  // }
//}


// creates event listener for the start button
startButtonEl.addEventListener("click", startTimer);
startButtonEl.addEventListener("click", startQuizHandler);



