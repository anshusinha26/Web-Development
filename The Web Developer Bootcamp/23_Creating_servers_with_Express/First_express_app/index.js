// require 'express'
const express = require("express");

// execute express
const app = express();

// initialise the port for the server
const port = 3000;

// // middleware function to handle incoming requests
// app.use(function (req, res) {
//     console.log("We got a request!");
//     res.send("<h1>Hello world!</h1>");
// });

// routing
app.get("/dogs", function (req, res) {
    res.send("Woof!");
});

app.post("/cats", function (req, res) {
    res.send("Meow!");
});

// express path parameters
app.get("/r/:subreddit/:postId", function (req, res) {
    const { subreddit, postId } = req.params;
    res.send(`Viewing Post Id ${postId} on the ${subreddit} subreddit`);
});

// working with query strings
app.get("/search/", function (req, res) {
    const { q } = req.query;
    res.send(`Search results for ${q}!!!`);
});

// start the server
app.listen(port, function () {
    console.log(`App listening on port ${port}`);
});
