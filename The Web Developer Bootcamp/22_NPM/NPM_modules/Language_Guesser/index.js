// import the packages
import { franc } from "franc";
import langs from "langs";
import colors from "colors";

// take the input
const input = process.argv[2];

// get the language code from the 'franc' input
const langCode = franc(input);

// if the language code is undetermined
if (langCode === "und") {
    console.log(colors.red("Unknown language! Try with some different text."));
}
// else print out the language name
else {
    // get the language object
    const language = langs.where("3", langCode);
    if (language) {
        console.log(colors.green(`The input language is: ${language.name}`));
    } else {
        console.log(
            colors.red(`Unable to find language name for code: ${langCode}`)
        );
    }
}
