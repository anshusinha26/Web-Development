// 1. Import express and axios
import express from "express";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;

// path to current directory
const __dirname = dirname(fileURLToPath(import.meta.url));

// 3. Use the public folder for static files.
app.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.

const API_URL = "https://secrets-api.appbrewery.com";

app.get("/", async function (req, res) {
    // 5. Use axios to get a random secret and pass it to index.ejs to display the
    // secret and the username of the secret.
    try {
        const response = await axios.get(API_URL + "/random");
        const secret = response.data.secret;
        const user = response.data.username;

        res.render(__dirname + "/views/index.ejs", {
            secret: JSON.stringify(secret),
            user: JSON.stringify(user),
        });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});

// 6. Listen on your predefined port and start the server.
app.listen(port, function () {
    console.log(`Server running on port ${port}`);
});
