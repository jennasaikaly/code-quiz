//NEEDED
/********************/
// DEFINE VARIABLES
/********************/
//start quiz variables
let startButtonEl = document.querySelector('#start-button');
let quizIntroEl = document.querySelector('#quiz-intro');

//timer variables
let timeLeft = 75;
const countdownEl = document.getElementById('time');

//create question variable
let quizWrapperEl = document.querySelector('#quiz-wrapper');
let quizContentEl = document.querySelector('#quiz-content');
let questionIdCounter = 0;

//check answer variables
let answerContainerEl = document.querySelector('#answer-container');

//save score variables
let scoreContainerEl = document.querySelector('#score-container');
//UNSURE

let introEl = document.querySelector('#intro')



//let headerQuestionEl = document.querySelector('#header-question');
//let infoChoiceEl = document.querySelector('#info-choice');
//let startAnswerEl = document.querySelector('#start-answer')
//let introTextEl = document.querySelector('#intro-text');
//let quizContentEl = document.querySelector('#quiz-content');

//let answerWrapperEl = document.querySelector('#answer-wrapper');
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
  quizIntroEl.style.display = "none";

  //document.getElementById("header-question").innerHTML = "";
  //document.getElementById("info-choice").innerHTML = "";
  //document.getElementById("start-answer").innerHTML = "";
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

  quizContentEl.innerHTML="";
  //document.getElementById("#question").innerHTML = "";
 // document.getElementById("#quiz-question").innerHTML = "";
  //document.getElementById("start-answer").innerHTML = "";
  //create question header



  //let questionWrapperEl = document.createElement("div");

  //questionWrapperEl.className = "question-wrapper";
  //add question id as a custom attribute
  //questionWrapperEl.setAttribute("data-question-id",questionIdCounter);

  
  
  
 
  let questionListEl = document.createElement("ul");
  questionListEl.className = "question-list";
  questionListEl.id = "question-list";
  questionListEl.setAttribute("data-question-id", questionIdCounter);
  questionListEl.style.listStyleType = "none";
  questionListEl.style.justifyContent = "left;"

  let questionHeaderEl = document.createElement("lh");
  questionHeaderEl.className = "question-header";
  questionHeaderEl.id = "question-header";
  

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
  //new

  //questionListEl.appendChild(questionHeaderEl);





  questionHeaderEl.textContent = "";
  buttonLi0.textContent = "";
  buttonLi0.textContent = "";
  buttonLi0.textContent = "";
  buttonLi0.textContent = "";

  choiceLi4.appendChild(buttonLi0);
  choiceLi1.appendChild(buttonLi1);
  choiceLi2.appendChild(buttonLi2);
  choiceLi3.appendChild(buttonLi3);
  questionListEl.appendChild(questionHeaderEl);
  questionListEl.appendChild(choiceLi1);
  questionListEl.appendChild(choiceLi2);
  questionListEl.appendChild(choiceLi3);
  questionListEl.appendChild(choiceLi4);
  quizContentEl.appendChild(questionListEl);
 

 
  let i = questionIdCounter;
  if (i < allQuestions.length) {
    console.log(allQuestions[i].question);
    questionHeaderEl.textContent = allQuestions[i].question;
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
  //event.preventDefault();
  var element = event.target;
 answerContainerEl.innerHTML = "";
  let rightWrong = document.createElement("p");
  rightWrong.className = "right-wrong";
  answerContainerEl.appendChild(rightWrong);
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
 
quizContentEl.style.display = "none";
answerContainerEl.style.display = "none";
  // check localStorage for high score, if it's not there, use 0
  var highScore = localStorage.getItem("highscore");
  if (highScore === null) {
    highScore = 0;
  }
  if (timeLeft > highScore) {
    //debugger;
    //headerQuestionEl.textContent = "All Done!";
    //infoChoiceEl.innerHTML = "Your final score is " + timeLeft;
    //startAnswerEl.style.display = "none";
    let saveScoreHeading = document.createElement("h2");
    saveScoreHeading.className = "save-score-heading";
    saveScoreHeading.style.textAlign = "center";
    let finalScoreEl = document.createElement("p");
    finalScoreEl.className = "final-score";
    
    let formEl = document.createElement("form");
    formEl.setAttribute("method", "post");
    formEl.setAttribute("action", "highscore.html");
    formEl.style.width = "400px";
    formEl.style.margin = "auto";

    var initialsEl = document.createElement("p");
    initialsEl.style.display = "inline";

    initialsEl.setAttribute("name", "initials-text");
    
    // Create an input element for initials
    var initialsInput = document.createElement("input");
    initialsInput.setAttribute("type", "text");
    initialsInput.setAttribute("name", "initials");
    initialsInput.setAttribute("placeholder", "Enter your initials");
    initialsInput.style.margin = "1px 4px";
    // create a submit button
    var submitButtonEl = document.createElement("button");
    submitButtonEl.innerHTML = "Submit"
    
    scoreContainerEl.appendChild(saveScoreHeading);
    scoreContainerEl.appendChild(finalScoreEl);
    //Append initialElement Text to the form
    formEl.appendChild(initialsEl);
    // Append the initial input to the form
    formEl.appendChild(initialsInput);
    // Append the submit button to the form
    formEl.appendChild(submitButtonEl);

    scoreContainerEl.appendChild(formEl);

    saveScoreHeading.textContent = "All done!";
    finalScoreEl.textContent = "Your final score is " + timeLeft + ". ";
    initialsEl.textContent = "Enter your initials:";
    //document.getElementsByTagName("body")[0]
    //  .appendChild(formEl);

    //var highScoreObj = {
    // initials:  initialsInput,
    // score: timeLeft
    initialsInput = initialsInput.value.toUpperCase();
    scoreList.push('initialsInput', timeLeft);
    // localStorage.setItem("highscore", timeLeft);
    //   localStorage.setItem("initials", initialsInput.value);



    submitButtonEl.addEventListener("click", scoreBoard());
  }
  else {
    saveScoreHeading.textContent = "Sorry!";
    finalScoreEl.textContent = "You did not beat the high score.  Please try again."
   
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



