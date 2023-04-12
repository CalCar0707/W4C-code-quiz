// variable for timer
var timeEl = document.getElementById('timer');
var secondsLeft = 120;

// variables for event listeners
var startBtn = document.getElementById('start-button');
var startMsg = document.getElementById('starting-page');

//variables for questions
// questionContainer and question are same element targeted diff ways*****
// variables for containers
var container = document.querySelector('.container');
var questionContainer = document.querySelector('.question-container');
var answerContainer = document.querySelector('.answer-container');

//variables for individual elements
var allOptions = document.querySelectorAll('.option');
var question = document.getElementById('question');
var answerOne = document.getElementById('answer1');
var answerTwo = document.getElementById('answer2');
var answerThree = document.getElementById('answer3');
var answerFour = document.getElementById('answer4');
var answerStatus = document.getElementById('answer-status');
var score = document.getElementById('score');

//variables for high score
var scoreContainer = document.querySelector('.high-scores');
var userInitials = document.getElementById('highscore');
var submitBtn = document.getElementById('submit-hs');


container.style.display = 'none';
scoreContainer.style.display = 'none';

var questionIndex = -1;
//variables for question info
const myQuestions = [
    {   
        question: 'Commonly used data types do NOT include:',
        options: ['1: strings', '2. booleans', '3. alerts', '4. numbers'],
        answer: '3. alerts'
    },
    {
        question: 'Arrays in JavaScript can be used to store ______.',
        options: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
        answer: '4. all of the above'
    },
    {
        question: 'The condition of an if/ else statement is enclosed with _____.',
        options: ['1. quotes', '2. curly brackets', '3. parentheses', '4. square brackets'],
        answer: '2. curly brackets'
    },
    {
        question: 'The first index of an array is: ',
        options: ['1. [0]', '2. [1]', '3. [2]', '4. [8]'],
        answer: '1. [0]'
    },
    {
        question: 'How do you create a function?',
        options: ['1. function = myFunction()', '2. function myFunction()', '3. myFunction()', '4. function: myFunction()'],
        answer: '2. function myFunction()'
    }];

var userInput = '';
var score = 0;



//quiz countdown- WORKING
function startQuiz(){
    //clicking start button starts
    startBtn.addEventListener('click', () => {
      startMsg.style.display = 'none';    
    container.style.display = 'block';
    var timeInterval = window.setInterval( () => {
        secondsLeft--;
        timeEl.textContent = 'Time: ' + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            //insert function here

            timeEl.textContent = 'TIME\'S UP!!';
            //insert high score option here
            container.style.display = 'none';
            scoreContainer.style.display = 'block';

        }
    }, 1000);
}) 
nextQuestion();
};


function nextQuestion() {
    questionIndex++;
    var question = document.getElementById('question');
    var answerOne = document.getElementById('answer1');
    var answerTwo = document.getElementById('answer2');
    var answerThree = document.getElementById('answer3');
    var answerFour = document.getElementById('answer4');

    
    question.textContent = myQuestions[questionIndex].question;
    answerOne.textContent = myQuestions[questionIndex].options[0];
    answerTwo.textContent = myQuestions[questionIndex].options[1];
    answerThree.textContent = myQuestions[questionIndex].options[2];
    answerFour.textContent = myQuestions[questionIndex].options[3];

    if(myQuestions.length > questionIndex){
        checkAnswer()
    } ;
};

function checkAnswer() {
     answerOne.onclick = () => {
         var answerStatus = document.getElementById('answer-status');
         answerStatus.textContent = 'Incorrect!';
         nextQuestion();

     };

     answerTwo.onclick = () => {
         var answerStatus = document.getElementById('answer-status');
         answerStatus.textContent = 'Incorrect!';
         nextQuestion();

     };

     answerThree.onclick = () => {
         var answerStatus = document.getElementById('answer-status');
         answerStatus.textContent = 'Correct!';
         nextQuestion();

     };

     answerFour.onclick = () => {
         var answerStatus = document.getElementById('answer-status');
         answerStatus.textContent = 'Incorrect!';
         nextQuestion();

     };

 };

//  function nextQuestion() {
//     var question = document.getElementById('question');
//     var answerOne = document.getElementById('answer1');
//     var answerTwo = document.getElementById('answer2');
//     var answerThree = document.getElementById('answer3');
//     var answerFour = document.getElementById('answer4');

//     for(var i = 0; i < myQuestions.length; i++) {
//     question.textContent = myQuestions[i].question;
//     answerOne.textContent = myQuestions[i].options[0];
//     answerTwo.textContent = myQuestions[i].options[1];
//     answerThree.textContent = myQuestions[i].options[2];
//     answerFour.textContent = myQuestions[i].options[3];
//     }
//     checkAnswer();
// };


///myQuestions.forEach( function(question,) => {
    //if (answerOne.addEventListener('click'))

//})

// function gameOver() {
//     if (secondsLeft === 0) {
//         answerStatus.textContent = 'GAME OVER!'
//     } else if ()
// }


startQuiz();

// CREATE FUNCTIONS AND THEN ADD EVENT LISTENER
// ANSWERoNE.ADDeVENT LISTENER('CLICK', fUNCTION());

//seperate each question into function