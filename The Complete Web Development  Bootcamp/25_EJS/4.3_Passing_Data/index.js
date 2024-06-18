import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

//-----//

// let h1Content = "";

// app.get("/", (req, res) => {
//     h1Content = "<h1>Enter your name below: 👇🏻</h1>";
//     res.render(__dirname + "/views/index.ejs", {
//         h1Content: h1Content,
//     });
// });

// app.post("/submit", (req, res) => {
//     let firstName = req.body.fName;
//     let lastName = req.body.lName;
//     let letterCount = firstName.length + lastName.length;
//     h1Content = `<h1>There are ${letterCount} letters in your name.</h1>`;
//     res.render(__dirname + "/views/index.ejs", {
//         h1Content: h1Content,
//     });
// });

//-----//

app.get("/", function (req, res) {
    res.render(__dirname + "/views/index.ejs");
});

app.post("/submit", (req, res) => {
    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let letterCount = firstName.length + lastName.length;
    res.render(__dirname + "/views/index.ejs", {
        numLetters: letterCount,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
