// import necessary modules
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

// set up the app and the port
const app = express();
const port = 3000;

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// database connection
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "permalist",
    port: 5432,
    password: 12345,
});
db.connect();

// items list
let items = [
    { id: 1, title: "Buy milk" },
    { id: 2, title: "Finish homework" },
];

// route to the root path
app.get("/", async (req, res) => {
    try {
        // get the data from the database
        const response = await db.query("select * from items order by id asc");
        // update the items list with the new data
        items = response.rows;

        res.render("index.ejs", {
            listTitle: "Today",
            listItems: items,
        });
    } catch (err) {
        console.log(err);
    }
});

// route to the /add path
app.post("/add", async (req, res) => {
    // get the item to be added
    const item = req.body.newItem;

    try {
        // add the item into the items
        await db.query("insert into items (title) values ($1)", [item]);
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
});

// route to the /edit path
app.post("/edit", async (req, res) => {
    // get the item and id to be edited
    const item = req.body.updateItemTitle;
    const id = req.body.updateItemId;

    try {
        // update the title and id in the database
        await db.query("update items set title = $1 where id = $2", [item, id]);
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
});

// route to the /delete path
app.post("/delete", async (req, res) => {
    // get the id to be deleted
    const id = req.body.deleteItemId;

    try {
        // delete the item with the given 'id'
        await db.query("delete from items where id = $1", [id]);
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
});

// start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
