var timeEl = document.getElementById('timer');

var secondsLeft = 120;

function setTime(){
    var timeInterval = window.setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + ' seconds until quiz is over.';

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            //insert function here
        }
    }, 1000);
}

setTime();