// import necessary modules
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from 'body-parser';
import _ from 'lodash';

// set up initial contents
const homeContent =
    "A lake or an easy weekend is what God wants to decorate it with. Always the author, nor the time of life. Let it be a course of action. Viverra lived in this place. Do not use a microwave oven or a dishwasher. Until the basketball players are not members or members of the arc. Mattis the employee was targeted by the students. The mountains will give birth to a great push, and a ridiculous mouse will be born in the ultricia of life. I'm trying to find a way to get rid of the poison bed. The author of the life of Ultrices advocates football as a bed of alcohol to drink. Odio euismod lacinia at quis risus sed vulputate odio ut The course of the real estate agent was aimed at the students.";
const aboutContent = "☑️ I'm not a robot";
const contactContent = 'Not available!';

// set up the app and port
const app = express();
const port = 3000;

// current directory path
const __dirname = dirname(fileURLToPath(import.meta.url));

// middlewares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

// array to store posts
const posts = [];

// route for the root path
app.get("/", function (req, res) {
    res.render(__dirname + "/views/home.ejs", {
        homeStartingContent: homeContent,
        posts: posts,
    });
});

// route for the about endpoint
app.get("/about", function (req, res) {
    res.render(__dirname + "/views/about.ejs", {
        aboutStartingContent: aboutContent,
    });
});

// route for the contact endpoint 
app.get("/contact", function (req, res) {
    res.render(__dirname + "/views/contact.ejs", {
        contactStartingContent: contactContent,
    });
});

// route for the compose endpoint
app.get("/compose", function (req, res) {
    res.render(__dirname + "/views/compose.ejs");
});

// route for the compose endpoint
app.post("/compose", function (req, res) {
    const post = {
        title: req.body.postTitle,
        content: req.body.postBody,
    };

    posts.push(post);
    res.redirect("/");
});

// route for the post endpoint
app.get("/posts/:postName", function (req, res) {
    const requestedTitle = _.lowerCase(req.params.postName);

    posts.forEach(function (post) {
        const storedTitle = _.lowerCase(post.title);

        if (storedTitle === requestedTitle) {
            res.render(__dirname + '/views/post.ejs', {
                title: post.title,
                content: post.content,
            });
        }
    });
});

// start the server
app.listen(port, function () {
    console.log("Server running on port 3000");
});
