var startButton = $("#start-button");
var questionDisplay = $("#question-display");
var questionForm =$("#question-form");
var timerValue =$("#timer");
var questionField = $("#question-field");
var answerOne = $("#answer-one");
var answerTwo = $("#answer-two");
var answerThree = $("#answer-three");
var answerFour = $("#answer-four"); 
var answerButton = $(".answer");
var scoreCard = $("#score-card");
var scoreField = $(".card-text");
var scoreButton = $(".score");
var answerStatus = $("#answer-status");
var submitButton = $("#submit");
var scoreReturn = JSON.parse(localStorage.getItem("score"));
var scoreName = $(".score-name");
var scoreScore = $(".score-score");
var x = 0;

var secondsDisplay = 30;

var secondsStart;

var score = 0;

timerDisplay();

if (scoreReturn !== null) {
scoreName.text(scoreReturn.name);
scoreScore.text(scoreReturn.score);
};

function timerDisplay() {
    timerValue.text(secondsDisplay);
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


function setQuestions() {
  questionField.text(questions[x].title);
  answerOne.text(questions[x].choices[0]);
  answerTwo.text(questions[x].choices[1]);
  answerThree.text(questions[x].choices[2]);
  answerFour.text(questions[x].choices[3]);

}

answerButton.on("click", function(){
  if (x < 4 ){
    x++;

    questionField.text(questions[x].title);
    answerOne.text(questions[x].choices[0]);
    answerTwo.text(questions[x].choices[1]);
    answerThree.text(questions[x].choices[2]);
    answerFour.text(questions[x].choices[3]);

    if ($(this).text()===questions[x].answer){
      score += 10;
      alert("correct");
    } else {
      score -= 5;
      alert("incorrect");
      secondsDisplay -= 5;
    };
  } else {
    if ($(this).text()===questions[x].answer){
      score += 10;
      alert("correct");
      endGame();
    } else {
      score -= 5;
      alert("incorrect");
      secondsDisplay -= 5;
      endGame();
    };
  }
  });



startButton.on("click", function () {
    questionDisplay.attr("class", "d-none");
    questionForm.attr("class","d-block");
    setTime();
    setQuestions();
    });


scoreButton.on("click", function(){
    scoreField.text(score);
});

submitButton.on("click", function(){
  var namePrompt = prompt("Enter Name");
  var scoreUser = {
    name: namePrompt,
    score: score,
  };
  localStorage.setItem("score",JSON.stringify(scoreUser));
});


function endGame() {
  questionForm.attr("class","d-none");
  scoreCard.attr("class","d-block");
  secondsDisplay = 1;
}

function setTime() {
      var timerInterval = setInterval(function() {
        secondsDisplay--;
        timerDisplay();
        if(secondsDisplay <= 0) {
          clearInterval(timerInterval);
          timerDisplay();
          endGame();
        }
    
      }, 1000);
}


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


