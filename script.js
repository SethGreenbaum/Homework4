var startButton = $("#start-button");
var clearButton =$(".clear");
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
console.log(scoreReturn);
var scoreName = $(".score-name");
var scoreScore = $(".score-score");
var scoreNameTwo = $(".score-name-two");
var scoreScoreTwo = $(".score-score-two");
var scoreNameThree = $(".score-name-three");
var scoreScoreThree = $(".score-score-three");
var x = 0;
var secondsDisplay = 30;

var secondsStart;
var highScore = [];


var scoreUser;
var score = 0;

timerDisplay();


function scoreDisplay() {

if (scoreReturn.length === 2){
  console.log("c2");
  scoreReturn.sort(function(a, b){return b.score - a.score});
  scoreName.text(scoreReturn[0].name); 
  scoreScore.text(scoreReturn[0].score);
  scoreNameTwo.text(scoreReturn[1].name); 
  scoreScoreTwo.text(scoreReturn[1].score);
} else if (scoreReturn.length >= 3){
  console.log("c3");
  scoreReturn.sort(function(a, b){return b.score - a.score});
  scoreName.text(scoreReturn[0].name); 
  scoreScore.text(scoreReturn[0].score);
  scoreNameTwo.text(scoreReturn[1].name); 
  scoreScoreTwo.text(scoreReturn[1].score);
  scoreNameThree.text(scoreReturn[2].name); 
  scoreScoreThree.text(scoreReturn[2].score);
} else {
  console.log("c1");
  scoreReturn = [scoreReturn];
  scoreName.text(scoreReturn[0].name); 
  scoreScore.text(scoreReturn[0].score);};
};

if (scoreReturn === null) {
  console.log("null");
  scoreName.text(""); 
  scoreScore.text("");
  scoreNameTwo.text("");
  scoreScoreTwo.text("");
  scoreNameThree.text("");
  scoreScoreThree.text("");
} else {scoreDisplay()};

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

    if ($(this).text() === questions[x].answer){
      score += 10;
      alert("correct");
    } else {
      score -= 5;
      alert("incorrect");
      secondsDisplay -= 5;
    };
    x++;
    
    questionField.text(questions[x].title);
    answerOne.text(questions[x].choices[0]);
    answerTwo.text(questions[x].choices[1]);
    answerThree.text(questions[x].choices[2]);
    answerFour.text(questions[x].choices[3]);
    
  } else {
    if ($(this).text() === questions[x].answer){
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
  scoreUser= {
    name: namePrompt,
    score: score,
  };
  

  if (scoreReturn !== null) {
  scoreReturn.push(scoreUser);
  localStorage.clear();
  localStorage.setItem("score",JSON.stringify(scoreReturn));
  } else {
  localStorage.setItem("score",JSON.stringify(scoreUser));
  };

});

clearButton.on("click", function(){
  localStorage.clear();
  location.reload();
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





