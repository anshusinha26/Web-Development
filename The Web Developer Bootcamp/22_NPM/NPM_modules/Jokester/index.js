// require the 'give-me-a-joke' package
const jokes = require("give-me-a-joke");
// console.dir(jokes);

// get a random joke
jokes.getRandomDadJoke(function (joke) {
    console.log(joke);
});
