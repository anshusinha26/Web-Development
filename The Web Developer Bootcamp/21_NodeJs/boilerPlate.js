const fs = require("fs");
console.log(fs);

// // asynchronous
// fs.mkdir("Dogs", { recursive: true }, function (err) {
//     console.log("In the callback!");
//     if (err) throw err;
// });

// console.log("Outside the callback now!!");

console.log(process.argv);

// create files in a folder
const folderName = process.argv[2] || "Sample_project"; // if undefined make a folder with name 'Sample_project'

// create the folder
fs.mkdirSync(folderName);

try {
    // create the files inside the folder
    fs.writeFileSync(`${folderName}/index.html`, "");
    fs.writeFileSync(`${folderName}/styles.css`, "");
    fs.writeFileSync(`${folderName}/app.js`, "");
} catch (e) {
    console.log("Something went wrong!");
    console(e);
}
