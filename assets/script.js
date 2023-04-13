// variable for timer
var timeEl = document.getElementById('timer');
var secondsLeft = 60;

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
score.style.display = 'none';

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
        options: ['1. quotes', '2. parentheses', '3. curly brackets', '4. square brackets'],
        answer: '3. curly brackets'
    },
    {
        question: 'The first index of an array is: ',
        options: ['1. [2]', '2. [1]', '3. [0]', '4. [8]'],
        answer: '3. [0]'
    },
    {
        question: 'How do you create a function?',
        options: ['1. function = myFunction()', '2. myFunction()','3. function myFunction()', '4. function: myFunction()'],
        answer: '3. function myFunction()'
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
        score.textContent = 'Score:' + score;

        if (secondsLeft === 0 || myQuestions.length === 0) {
            clearInterval(timeInterval);
            gameOver();

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
    } else if (myQuestions.length === 0 || secondsLeft === 0) {
        gameOver();
    }
};

//keyword this.target.texcontent !== correctanswer
function checkAnswer() {

       answerOne.onclick = () => {
           var answerStatus = document.getElementById('answer-status');
           answerStatus.textContent = 'Incorrect!';
           timeEl.textContent = secondsLeft -10;
           nextQuestion();

       };

       answerTwo.onclick = () => {
           var answerStatus = document.getElementById('answer-status');
           answerStatus.textContent = 'Incorrect!';
           timeEl.textContent = secondsLeft -10;
           nextQuestion();

       };

       answerThree.onclick = () => {
           var answerStatus = document.getElementById('answer-status');
           answerStatus.textContent = 'Correct!';
           score.textContent = score + 10;
           nextQuestion();

       };

       answerFour.onclick = () => {
           var answerStatus = document.getElementById('answer-status');
           answerStatus.textContent = 'Incorrect!';
           timeEl.textContent = secondsLeft -10;
           nextQuestion();

      };
    };

function gameOver() {
    if (secondsLeft === 0) {
        timeEl.textContent = 'GAME OVER!!';
            container.style.display = 'none';
            highScore();
    } 
};

function highScore() {
    scoreContainer.style.display = 'block';
    localStorage.setItem('user-score', JSON.stringify((score.value)));
    localStorage.getItem('user-score');
}




startQuiz();
