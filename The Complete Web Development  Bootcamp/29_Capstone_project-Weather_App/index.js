// import necessary modules
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import axios from "axios";

// set up the app and port
const app = express();
const port = 3000;

// use the public folder for static files
app.use(express.static("public"));

// parse URL-encoded bodies (HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// path to the current directory
const __dirname = dirname(fileURLToPath(import.meta.url));

// get the api key, the api endpoint and the image endpoint
const API_KEY = "8f6c67105e23a1ff948cf2d05f004c37";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

// route for the root endpoint
// route for the root endpoint
app.route("/")
    .get(function (req, res) {
        res.render(__dirname + "/views/index.ejs");
    })
    .post(function (req, res) {
        res.redirect("/");
    });

// route for the submit endpoint
app.post("/submit", async function (req, res) {
    try {
        // get the coordinates
        const latitude = parseFloat(req.body.latitude);
        const longitude = parseFloat(req.body.longitude);

        // basic validation for coordinates
        if (isNaN(latitude) || isNaN(longitude)) {
            throw new Error("Invalid coordinates");
        }

        // get the response
        const response = await axios.get(API_URL, {
            params: {
                lat: latitude,
                lon: longitude,
                appid: API_KEY,
            },
        });

        // get the data from API's response
        const city = response.data.name;
        const country = response.data.sys.country;
        const temperature = Math.round(response.data.main.temp - 273.15);
        const weatherDescription = response.data.weather[0].description;
        let imgType = response.data.weather[0].icon;
        let imgUrl = `https://openweathermap.org/img/wn/${imgType}@2x.png`;
        const weatherIcon = imgUrl;
        const weatherId = response.data.weather[0].id;

        // render the view
        res.render(__dirname + "/views/index.ejs", {
            city: city,
            country: country,
            temperature: temperature,
            weatherDescription: weatherDescription,
            weatherIcon: weatherIcon,
            weatherId: weatherId,
        });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send("Error fetching weather data");
    }
});

// start the server
app.listen(port, function () {
    console.log(`Server running on port ${port}`);
});
