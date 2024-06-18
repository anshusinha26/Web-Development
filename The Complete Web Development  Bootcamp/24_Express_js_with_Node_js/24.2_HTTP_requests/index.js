import express from "express";
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    res.send("Hello world!");
});

app.get("/about", function (req, res) {
    res.send("☑️ I'm not a robot");
});

app.get("/contacts", function (req, res) {
    res.send("anshujuly2@gmail.com");
});

app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});
