// The password is 'No, it's necessary!'

// import necessary modules
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

// set up the app and the port
const app = express();
const port = 3000;

// get the current directory path
const __dirname = dirname(fileURLToPath(import.meta.url));

// set up the middleware function
app.use(bodyParser.urlencoded({ extended: true }));

// route for the root path
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

// function to check if the user entered the correct password
function isCorrectPassword(userPassword) {
    // set the password
    const password = "No, it's necessary!";

    return password === userPassword;
}

// route for handling form submission
app.post("/check", function (req, res) {
    // get the password from the request body
    const userPassword = req.body.password;

    // open the secret, if user entered the correct password
    if (isCorrectPassword(userPassword)) {
        console.log("Correct password entered!");
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        console.log("Incorrect password entered!");
        res.sendFile(__dirname + "/public/index.html");
    }
});

// start the port
app.listen(port, function () {
    console.log(`Server running on port ${port}`);
});
