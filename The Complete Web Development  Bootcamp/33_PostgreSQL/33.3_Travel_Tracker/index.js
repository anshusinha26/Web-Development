// import necessary modules
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { error } from "console";

// set up the app and the port
const app = express();
const port = 3000;

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// path to the current directory
const __dirname = dirname(fileURLToPath(import.meta.url));

// database connection
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "3Rc8*npFzYPHZw",
    port: 5432,
});
db.connect();

// function to check for the visited_countries
const checkVisited = async function () {
    const response = await db.query("select * from visited_countries");
    let countries = [];
    response.rows.forEach((country) => {
        countries.push(country.country_code);
    });

    return countries;
};

// route to the root path
app.get("/", async (req, res) => {
    // get all the country_code and render out the index.ejs with the visited_countries
    try {
        const countries = await checkVisited();
        res.render(__dirname + "/views/index.ejs", {
            countries: countries,
            total: countries.length,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
    }
});

// route to the /add path
app.post("/add", async function (req, res) {
    // add new visited_countries
    const country = req.body.country;
    try {
        const response = await db.query(
            "select country_code from countries where lower(country_name) like '%' || $1 || '%';",
            [country.toLowerCase()]
        );

        // get hold of the addedCountry
        const addedCountry = response.rows[0];
        // get hold of the countryCode
        const countryCode = addedCountry.country_code;
        try {
            // insert the new countryCode into the database
            await db.query(
                "insert into visited_countries (country_code) values ($1)",
                [countryCode]
            );
            res.redirect("/");
        } catch (err) {
            console.error(err);
            const countries = await checkVisited();
            res.render(__dirname + "/views/index.ejs", {
                countries: countries,
                total: countries.length,
                error: "Country has already been added, try again!",
            });
        }
    } catch (err) {
        console.error(err);
        const countries = await checkVisited();
        res.render(__dirname + "/views/index.ejs", {
            countries: countries,
            total: countries.length,
            error: "Country name does not exist, try again!",
        });
    }
});

// start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
