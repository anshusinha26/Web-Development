// store button colors
let buttonColors = ["red", "green", "blue", "yellow"];

// add the contents of the variable userChosenColor to the end of userClickedPattern
let userClickedPattern = [];

// store the game pattern
let gamePattern = [];

// start at level 0
let gameLevel = 0;

// initially the gameStart is set to false
let gameStart = false;

// start the game when the user presses any key
$(document).keypress(function () {
    if (gameStart === false) {
        // start the game
        gameStart = true;
        // trigger nextSequence
        nextSequence();
        // change the title of the page to show the starting gameLevel
        $("#level-title").text(`Level ${gameLevel}`);
    }
});

// add click event handler to all buttons
$(".btn").click(function () {
    // get the id of the clicked button
    let userChosenColor = $(this).attr("id");
    // push the chosen color into the array userClickedPattern
    userClickedPattern.push(userChosenColor);
    // playSound corresponding to the userChosenColor
    playSound(userChosenColor);
    // animatePress on click
    animatePress(userChosenColor);
    //checkAnswer for the most recent userClickedPattern, if it matches with the gamePattern
    checkAnswer(userClickedPattern.length - 1);
});

// function to checkAnswer of the user
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        // check for the length match
        if (userClickedPattern.length === gamePattern.length) {
            // trigger nextSequence after 1000ms
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    // else end the game
    else {
        // playSound wrong
        playSound("wrong");
        // add game-over class to the body
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        // startOver the game after 200ms of timeout
        setTimeout(function () {
            // remove the game-over class from the body
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

// function to trigger nextSequence
function nextSequence() {
    // reset the userClickedPattern
    userClickedPattern = [];
    // increase the game level and update the title
    gameLevel++;
    // reset the title of the page with the current level
    $("#level-title").text(`Level ${gameLevel}`);
    // generate random numbers in the range [0, 3]
    let randomNumber = Math.floor(Math.random() * 4);
    // generate a random color
    let randomChosenColor = buttonColors[randomNumber];
    // push the random color into the array gamePattern
    gamePattern.push(randomChosenColor);
    // select the div with id equal to the random chosen color and flash it
    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
    // play the sound with id equal to the random chosen color
    playSound(randomChosenColor);
}

// function to animate the press
function animatePress(currentColor) {
    $(`#${currentColor}`).addClass("pressed");
    setTimeout(function () {
        $(`#${currentColor}`).removeClass("pressed");
    }, 100);
}

// function to play sound
function playSound(name) {
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

// function to startOver the game
function startOver() {
    // reset the gameLevel to 0
    gameLevel = 0;
    // reset the gamePattern
    gamePattern = [];
    // set gameStart equal to false again
    gameStart = false;
}
