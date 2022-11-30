// variable for timer
var timeEl = document.getElementById('timer');
var secondsLeft = 120;
// variables for event listeners
var startBtn = document.getElementById('start-button');


//quiz countdown

function startQuiz(){
    startBtn.addEventListener('click', function() {
    var timeInterval = window.setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + ' seconds until quiz is over.';

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            //insert function here
            timeEl.textContent = 'TIME\'S UP!!';
        }
    }, 1000);
})};

startQuiz();