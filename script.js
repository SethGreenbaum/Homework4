var startButton = $("#start-button");
var questionDisplay = $("#question-display");
var questionForm =$("#question-form");
startButton.on("click", function () {
    questionDisplay.attr("class", "d-none");
    questionForm.attr("class","d-block");
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


