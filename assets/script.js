// variable for timer
var timeEl = document.getElementById('timer');
var secondsLeft = 120;
// variables for event listeners
var startBtn = document.getElementById('start-button');
//variables for questions
var questionContainer = document.querySelector('.container');
var questionOne = document.getElementById('question1');
var questionTwo = document.getElementById('question2');
var questionThree = document.getElementById('question3');
var questionFour = document.getElementById('question4');
var questionFive = document.getElementById('question5');

questionContainer.style.display = 'none';

//quiz countdown

function startQuiz(){
    startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    questionContainer.style.display = 'block';
    var timeInterval = window.setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + ' seconds until quiz is over.';

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            //insert function here
            timeEl.textContent = 'TIME\'S UP!!';
        }
    }, 1000);
})

};

startQuiz();