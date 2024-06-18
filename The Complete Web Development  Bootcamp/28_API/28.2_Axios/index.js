import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const __dirname = dirname(fileURLToPath(import.meta.url));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.
app.get("/", async (req, res) => {
    try {
        const response = await axios.get(
            "https://bored-api.appbrewery.com/random"
        );
        const result = response.data;
        res.render(__dirname + "/views/index.ejs", { data: result });
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render(__dirname + "/views/index.ejs", {
            error: error.message,
        });
    }
});

app.post("/", async (req, res) => {
    // console.log(req.body);
    let type = req.body.type;
    let participants = req.body.participants;

    // Step 2: Play around with the drop downs and see what gets logged.
    // Use axios to make an API request to the /filter endpoint. Making
    try {
        const response = await axios.get(
            "https://bored-api.appbrewery.com/filter",
            {
                // sure you're passing both the type and participants queries.
                params: {
                    type: type,
                    participants: participants,
                },
            }
        );

        // Render the index.ejs file with a single *random* activity that comes back from the API request.
        const randomIndex = Math.floor(Math.random() * response.data.length);
        const randomActivity = response.data[randomIndex];
        res.render(__dirname + "/views/index.ejs", {
            data: randomActivity,
        });
    } catch (error) {
        // Step 3: If you get a 404 error (resource not found) from the API request.
        // Pass an error to the index.ejs to tell the user:
        // "No activities that match your criteria!"
        console.error("Failed to make request: ", error.message);
        res.render(__dirname + "/views/index.ejs", {
            error: "No activities that match your criteria!",
        });
    }
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
