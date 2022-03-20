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
    question: "question 1",
    choices: [  "option 1",
                "option 2",
                "option 3",
                "option 4"],
    correctAnswer: 1 //index of the correct answer
    },
    {
    question: "question 2",
    choices: [  "option 1",
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

function createQuestion(id){
        
   
    //create question header
    let questionWrapperEl = document.createElement("div");
   
    questionWrapperEl.className = "question-wrapper";
    //add 
    questionWrapperEl.setAttribute("data-question-id", questionIdCounter);

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


let i = 0;
if (i < allQuestions.length) {
    console.log(allQuestions[i].question);
    questionHeaderEl.textContent = allQuestions[i].question;
    buttonLi1.textContent = allQuestions[i].choices[0];
    buttonLi2.textContent = allQuestions[i].choices[1];
    buttonLi3.textContent = allQuestions[i].choices[2];
    buttonLi4.textContent = allQuestions[i].choices[3];
    }
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

