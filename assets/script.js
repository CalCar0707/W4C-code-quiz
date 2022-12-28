// variable for timer
var timeEl = document.getElementById('timer');
var secondsLeft = 120;

// variables for event listeners
var startBtn = document.getElementById('start-button');

//variables for questions
var questionContainer = document.querySelector('.container');
var answerContainer = document.querySelector('.answer-container');
var question = document.getElementById('question');
var answerOne = document.getElementById('answer1');
var answerTwo = document.getElementById('answer2');
var answerThree = document.getElementById('answer3');
var answerFour = document.getElementById('answer4');

questionContainer.style.display = 'none';

//variables for question info
const myQuestions = [
    {   
        id: 0,
        question: 'Commonly used data types do NOT include:',
        options: ['1: strings', '2. booleans', '3. alerts', '4. numbers'],
        answer: '3'
    },
    {
        id: 1,
        question: 'Arrays in JavaScript can be used to store ______.',
        options: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
        answer: '4'
    },
    {
        id: 2,
        question: 'The condition of an if/ else statement is enclosed with _____.',
        options: ['1. quotes', '2. curly brackets', '3. parentheses', '4. square brackets'],
        answer: '2'
    },
    {
        id: 3,
        question: 'The first index of an array is: ',
        options: ['1. [0]', '2. [1]', '3. [2]', '4. [8]'],
        answer: '1'
    },
    {
        question: 'How do you create a function?',
        options: ['1. function = myFunction()', '2. function myFunction()', '3. myFunction()', '4. function: myFunction()'],
        answer: '2'
    }
]


//quiz countdown
function countdown(){
    //clicking start button starts
    startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    questionContainer.style.display = 'block';
    var timeInterval = window.setInterval(function () {
        secondsLeft--;
        timeEl.textContent = 'Time: ' + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            //insert function here
            timeEl.textContent = 'TIME\'S UP!!';
        }
    }, 1000);
})

};



countdown();