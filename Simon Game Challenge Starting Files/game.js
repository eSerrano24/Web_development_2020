let buttonColors = ["red", "blue", "green", "yellow"];

let userClickedPattern = [];

let gamePattern = [];

let started = false;

let level = 0;

//iniates game when key is pressed
$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//check which button is pressed
$(".btn").click(function () {
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);
  //console.log(userClickedPattern);
});

let checkAnswer = (currentLevel) => {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Correct");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    gameOver();
  }
};

function nextSequence() {
  //reset array for next level
  userClickedPattern = [];

  //increment level
  level++;
  //change H1 title
  $("#level-title").text("Level " + level);

  let randomNumber = Math.floor(Math.random() * 4);

  let randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);
}
//function plays sound when button is clicked
let playSound = (name) => {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};
//function animates buttons and removes animation after certain time
let animatePress = (currentColor) => {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
};

let gameOver = () => {
  playSound("wrong");
  $("body").addClass("game-over");

  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 400);

  $("#level-title").text("Game Over press any key to restart");

  startOver();
};

let startOver = () => {
  level = 0;
  gamePattern = [];
  started = false;
};
