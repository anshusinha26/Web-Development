const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// configure the app to use EJS as the view engine
app.set("view engine", "ejs");

// set the path
app.set("views", path.join(__dirname, "/views"));

// serving static assets
app.use(express.static(path.join(__dirname, "/public")));

// define route for the home
app.get("/home", function (req, res) {
    res.render("home");
});

// define route of the random
app.get("/random", function (req, res) {
    const rand = Math.floor(Math.random() * 100 + 1);
    res.render("random", { num: rand });
});

// define route of subreddit
app.get("/r/:subreddit", function (req, res) {
    const { subreddit } = req.params;
    res.render("subreddit", { subreddit });
});

// define route of dogs
app.get("/dogs", function (req, res) {
    const dogs = [
        "Labrador",
        "Pomeranian",
        "Siberian Husky",
        "Alaskan Malamute",
        "German Shepherd",
    ];
    res.render("dogs", { dogs });
});

app.listen(port, function () {
    console.log(`App running on port: ${port}`);
});
