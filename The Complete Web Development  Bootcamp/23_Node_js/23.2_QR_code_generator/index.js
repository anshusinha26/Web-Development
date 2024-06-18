import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        { message: "Type in a valid URL (www.website.com): ", name: "URL" },
    ])
    .then((answers) => {
        const URL = answers.URL;
        var qr_svg = qr.image(URL);
        qr_svg.pipe(
            fs.createWriteStream(`QR_codes/${URL.split(".")[1]}_QR.png`)
        );

        fs.appendFile("URL_texts/URL.txt", URL + "\n", (err) => {
            if (err) throw err;
            console.log(`The URL "${URL}" has been appended to the file!`);
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
