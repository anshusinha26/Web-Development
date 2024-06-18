// import necessary modules
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

// set up the app
const app = express();
const port = 3000;

// get the current directory path
const __dirname = dirname(fileURLToPath(import.meta.url));

// get the current week day
const today = new Date();
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const currentWeekday = weekdays[today.getDay()];

// route for the root path
app.get("/", function (req, res) {
    let day = currentWeekday;
    let mood = "";
    if (day === "Saturday" || day === "Sunday") {
        mood = "have fun";
    } else {
        mood = "work hard";
    }
    // render the index.ejs template with dynamic data
    res.render(__dirname + "/views/index.ejs", {
        day: day,
        mood: mood,
    });
});

// start the server
app.listen(port, function () {
    console.log(`Server running on port ${port}`);
});
