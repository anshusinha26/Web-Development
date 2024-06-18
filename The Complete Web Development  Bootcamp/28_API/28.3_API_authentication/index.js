import express from "express";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const __dirname = dirname(fileURLToPath(import.meta.url));

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "anshusinha";
const yourPassword = "chinkyledu";
const yourAPIKey = "e0f4d334-c309-4ea4-a0a0-d9796e746ff3";
const yourBearerToken = "dbcf1109-fb3e-453d-b8b9-5e0ac4a2d89e";

app.get("/", (req, res) => {
    res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
    try {
        //TODO 2: Use axios to hit up the /random endpoint
        const response = await axios.get(API_URL + "random");
        //The data you get back should be sent to the ejs file as "content"
        const content = response.data;
        //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
        res.render(__dirname + "/views/index.ejs", {
            content: JSON.stringify(content),
        });
    } catch (error) {
        // handle the error
        console.error(`Error fetching data from ${API_URL}/random: `, error);
        res.send(error.message);
    }
});

app.get("/basicAuth", async (req, res) => {
    try {
        //TODO 3: Write your code here to hit up the /all endpoint
        const response = await axios.get(API_URL + "all", {
            auth: {
                username: yourUsername,
                password: yourPassword,
            },
            params: {
                page: 2,
            },
        });
        const content = response.data;
        res.render(__dirname + "/views/index.ejs", {
            content: JSON.stringify(content),
        });
    } catch (error) {
        // handle the error
        console.error(
            `Error fetching data from ${API_URL}/all?page=2: `,
            error
        );
        res.send(error.message);
    }
});

app.get("/apiKey", async (req, res) => {
    try {
        //TODO 4: Write your code here to hit up the /filter endpoint
        const response = await axios.get(API_URL + "filter", {
            //Filter for all secrets with an embarrassment score of 5 or greater
            //HINT: You need to provide a query parameter of apiKey in the request.
            params: {
                apiKey: yourAPIKey,
                score: 5,
            },
        });
        const content = response.data;
        res.render(__dirname + "/views/index.ejs", {
            content: JSON.stringify(content),
        });
    } catch (error) {
        // handle the error
        console.error(
            `Error fetching data from ${API_URL}/filter?score=5&apiKey=${yourAPIKey}: `,
            error
        );
        res.send(error.message);
    }
});

app.get("/bearerToken", async (req, res) => {
    try {
        //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
        const response = await axios.get(API_URL + "secrets", {
            //and get the secret with id of 42
            params: {
                id: 42,
            },
            headers: {
                Authorization: `Bearer ${yourBearerToken}`,
            },
        });
        const content = response.data;
        res.render(__dirname + "/views/index.ejs", {
            content: JSON.stringify(content),
        });
    } catch (error) {
        // handle the error
        console.error(
            `Error fetching data from ${API_URL}/secrets/42: `,
            error
        );
        res.send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
