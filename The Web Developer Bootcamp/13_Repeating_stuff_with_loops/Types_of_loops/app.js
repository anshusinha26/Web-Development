// console.log("Hello world!");

// ----- 'for' loop

// print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("\n"); // new line (line gap or line break);

// print even number between 2 to 10 (inclusive if any)
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

console.log("\n");

// iterating over arrays
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

console.log("\n");

// nested loops
for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(i);
    }
}

console.log("\n");

// ----- 'while' loop

let i = 1;
while (i <= 10) {
    console.log(i);
    if (i === 5) {
        break;
    }
    i++;
}

console.log("\n");

// ----- 'for of' loop
let colors = ["red", "green", "blue"];
for (let i of colors) {
    console.log(i);
}

console.log("\n");

// ----- iterating over 'objects'
const countryCapital = {
    India: "New Delhi",
    USA: "Washington DC",
    China: "Beijing",
    Russia: "Moscow",
    Canada: "Ottawa",
    Australia: "Canberra",
};

for (let country in countryCapital) {
    console.log(countryCapital[country]);
}
