/***************** Global Variable ********************/
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0; //game levels
/*****************************************************/

/***************** Global Functions ********************/
//Choose and Save Color
function userPattern() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
}

function playSound(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

// function doSetTimeout(i) {
//   setTimeout(function() {
//       $("#" + gamePattern[i]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); }, 2000);
// }

function nextSequence() {
  var randomNumber = Math.floor(4 * Math.random());
  var randomChosenColour = buttonColours[randomNumber];

  if (level > 0)
  {
    $("#level-title").text("Level " + level);
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    // for (var i = 0; i <= gamePattern.length; ++i)
    //   doSetTimeout(i);

    // for (var i = 0; i<gamePattern.length; i++){
    //   $("#" + gamePattern[i]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    //   setTimeout(function () {
    //     alert("hello");
    //   }, 1000);
    // }
  }

  // for (var ipattern = 0; ipattern<gamePattern.length; ipattern++){
  //   setTimeout (function(){
  //     gameAnimate(ipattern);
  //   },1000);
  // //  $("#" + gamePattern[ipattern]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    // setInterval (function(){
    // }, 2000);

  //increase level
  level++;
  //reset user pattern
  userClickedPattern = [];
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setInterval(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

//Check Answer
function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    //console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length){

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {

    //console.log("wrong");
    $("body").addClass("game-over");
    setTimeout( function(){
      $("body").removeClass("game-over");
    }, 100);
    $("#level-title").text("Game Over, Press Any Key to Restart");

    //Reset Everything
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
  }

}


/*****************************************************/

/***************** Main function ********************/
//Add a Click listerner to all buttons
$(".btn").on("click", userPattern);

//Add a Keyboard Event
$(document).keypress(function(){
  nextSequence();
})
