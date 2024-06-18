// Import the required modules
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

// Get the current directory path
const __dirname = dirname(fileURLToPath(import.meta.url));

// Create an instance of the Express application
const app = express();

// Set the port for the server
const port = 3000;

// Use the body-parser middleware to parse URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Route for the root path
app.get("/", (req, res) => {
    // Send the index.html file from the public directory
    res.sendFile(__dirname + "/public/index.html");
});

// Route for handling form submissions
app.post("/submit", function (req, res) {
    // Extract the values of 'street' and 'pet' from the request body
    const street = req.body.street;
    const pet = req.body.pet;

    // Send a response with an HTML string containing the "band name"
    res.send(`<h1>Your band name is:</h1>\n<h3>${street + pet} 😎</h3>`);
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
