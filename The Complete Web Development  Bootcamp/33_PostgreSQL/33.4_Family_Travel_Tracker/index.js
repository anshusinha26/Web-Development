// import necessary modules
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

// set up the app and port
const app = express();
const port = 3000;

// database connection
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    port: 5432,
});
db.connect();

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// store currentUserId
let currentUserId = 1;

// list of users
let users = [
    { id: 1, name: "Anshu", color: "teal" },
    { id: 2, name: "Ledu", color: "powderblue" },
];

// function to checkVisited countries
async function checkVisited() {
    const response = await db.query(
        "select country_code from visited_countries join users on users.id = user_id where user_id = $1",
        [currentUserId]
    );
    let countries = [];
    response.rows.forEach((country) => {
        countries.push(country.country_code);
    });
    return countries;
}

// function to getCurrentUser
async function getCurrentUser() {
    const result = await db.query("SELECT * FROM users");
    users = result.rows;
    return users.find((user) => user.id == currentUserId);
}

// route to the root path
app.get("/", async (req, res) => {
    const countries = await checkVisited();
    const currentUser = await getCurrentUser();
    res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        users: users,
        color: currentUser.color,
    });
});

// route to the /add path
app.post("/add", async (req, res) => {
    const country = req.body.country;
    const currentUser = await getCurrentUser();

    try {
        const result = await db.query(
            "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
            [country.toLowerCase()]
        );

        const addedCountry = result.rows[0];
        const countryCode = addedCountry.country_code;
        try {
            await db.query(
                "INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)",
                [countryCode, currentUserId]
            );
            res.redirect("/");
        } catch (err) {
            console.log(err);
        }
    } catch (err) {
        console.log(err);
    }
});

// route to the /user path
app.post("/user", async (req, res) => {
    if (req.body.add === "new") {
        res.render("new.ejs");
    } else {
        currentUserId = req.body.user;
        res.redirect("/");
    }
});

// route to the /new path
app.post("/new", async (req, res) => {
    const name = req.body.name;
    const color = req.body.color;

    const response = await db.query(
        "insert into users (name, color) values ($1, $2) returning*",
        [name, color]
    );

    const id = response.rows[0].id;
    currentUserId = id;

    res.redirect("/");
});

// start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
