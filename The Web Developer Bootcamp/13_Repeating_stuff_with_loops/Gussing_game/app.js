// variable 'ans' to store the random number generated between the range [1, 100]
let ans = Math.floor(Math.random() * 100) + 1;
console.log(ans);

// assign 'guess' with -1 initially
let guess = -1;

// variable 'count' to track the number of guesses
let count = 0;

// loop until the guess is not equal to ans
while (guess !== ans) {
    // ask again
    guess = prompt("Enter a number between 1 and 100 (inclusive): ");

    // check if the user cancels out the 'prompt'
    if (guess === null) {
        break;
    }

    // convert 'guess' to an integer
    guess = parseInt(guess);

    // increment count
    count += 1;

    // break if guess === ans
    if (guess === ans) {
        alert("Correct :)");
        if (count === 1) {
            console.log(`It took you ${count} guess, incredible!`);
        } else {
            console.log(`It took you ${count} guesses..., that's ok.`);
        }
    }
    // else if the guess is smaller than ans
    else if (guess < ans) {
        alert("Too small :|");
    }
    // else if the guess is larger than ans
    else if (guess > ans) {
        alert("Too large :(");
    }
}
