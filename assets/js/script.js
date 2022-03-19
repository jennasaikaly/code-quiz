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


function startTimer(){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;

  //setInterval(startTimer, 1000);
}




//function that starts once 'Start' Button is clicked
let startQuizHandler = function(event){
   // debugger;
 event.preventDefault(); //prevents default browser settings from reloading the browser
//console.log(event.target)
 introEl.remove();

}

// creates event listener for the start button
startButtonEl.addEventListener("click", startTimer);
startButtonEl.addEventListener("click", startQuizHandler);

