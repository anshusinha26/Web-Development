// variables to store the buttons
const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");

// variables to hold pl1 and pl2 scores
let p1Score = 0;
let p2Score = 0;

// variable to store the spans
const p1Disp = document.querySelector("#p1Disp");
const p2Disp = document.querySelector("#p2Disp");

// variable to store new winning scores
const winningScoreSelect = document.querySelector("#playTo");

// variable to store the winning score
let winningScore = 3;

// variable to check if the game is over or not
let gameOver = false;

// variable to store the reset button
const resetBtn = document.querySelector("#reset");

// increase the scores and reflect it when the buttons are clicked
p1Btn.addEventListener("click", function () {
    // check if the game is over
    if (!gameOver) {
        // increase the score by 1
        p1Score++;
        // if the player's score is equal to winning score, set the game over to true
        if (p1Score === winningScore) {
            p1Disp.classList.add("has-text-success");
            p2Disp.classList.add("has-text-danger");
            gameOver = true;
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
        p1Disp.textContent = p1Score;
    }
});

// increase the scores and reflect it when the buttons are clicked
p2Btn.addEventListener("click", function () {
    // check if the game is over
    if (!gameOver) {
        // increase the score by 1
        p2Score++;
        // if the player's score is equal to winning score, set the game over to true
        if (p2Score === winningScore) {
            p2Disp.classList.add("has-text-success");
            p1Disp.classList.add("has-text-danger");
            gameOver = true;
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
        p2Disp.textContent = p2Score;
    }
});

// function to reset the score
function reset() {
    gameOver = false;
    p1Disp.textContent = 0;
    p2Disp.textContent = 0;
    p1Score = 0;
    p2Score = 0;
    p1Disp.classList.remove("has-text-success", "has-text-danger");
    p2Disp.classList.remove("has-text-success", "has-text-danger");
    p1Btn.disabled = false;
    p2Btn.disabled = false;
}

// change new winning scores
winningScoreSelect.addEventListener("change", function () {
    // update the current winning score
    winningScore = parseInt(this.value);
    reset();
});

// reset the score when the reset button is clicked
resetBtn.addEventListener("click", reset);
