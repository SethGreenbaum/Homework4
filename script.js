var startButton = $("#start-button");
var questionDisplay = $("#question-display");
var questionForm =$("#question-form");
var timerValue =$("#timer");

var secondsDisplay = 0;

var secondsStart;

timerDisplay();

function timerDisplay() {
    timerValue.text(secondsDisplay);
};

function clock() {
    secondsDisplay--;
    timerDisplay();
    console.log(secondsDisplay);
};

function stopTimer(){
    clearInterval(secondsStart);
    secondsDisplay = 0;
    timerDisplay();
}

function startTimer(){
    secondsDisplay = 30;
    timerDisplay();
    timerInterval();
};

function tickTock() {
    secondsStart = setInterval(clock,1000);
};

function timerInterval(){
    tickTock();
};



var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];

startButton.on("click", function () {
    questionDisplay.attr("class", "d-none");
    questionForm.attr("class","d-block");
    startTimer();
});

//coutdown timer, subtract 15 seconds from wrong answers
//timer is initiated by button
//0 on timer ends the game
//algorithms sections have timer
//initials and scores got into local storage
//view high scores button
//time counter in corner
//use bootstrap
//create div, then override content with object
//Scores can be determined as I wish
//you can use a second html file for high score page
//use a for loop to loop through questions instead of next button
//flash "correct" or "incorrect"
//use multiple javascript files


