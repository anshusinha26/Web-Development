// ----- 'forEach()' method
movies = [
    {
        title: "Interstellar",
        score: 8.7,
    },
    {
        title: "Gravity",
        score: 7.7,
    },
    {
        title: "The Martian",
        score: 8,
    },
];

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/10`);
});

console.log("\n");

// ----- 'map()' method
const texts = ["hello", "world", "it", "was", "nice", "meeting you!"];
const caps = texts.map(function (text) {
    return text.toUpperCase();
});

console.log(caps);

console.log("\n");

// ----- Arrow functions
const add = (x, y) => {
    return x + y;
};

console.log(add(1, 2));

console.log("\n");

// ----- Arrow functions implicit returns
const add2 = (x, y) => x + y; // no return keyword and {} is replace by ()

console.log(add2(3, 2));

const movie = movies.map((movie) => `${movie.title} - ${movie.score}/10`);
console.log(movie);

console.log("\n");

// // ----- 'setTimeout' and 'setInterval'
// console.log("Hello");
// setTimeout(() => {
//     console.log("...are you there?");
// }, 3000);
// console.log("World!");

// console.log("\n");

// setInterval(() => {
//     console.log("Hello!");
// }, 2000);

// ----- 'filter()' method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = numbers.filter((n) => {
    return n % 2 == 0;
});

console.log(evenNums);

console.log("\n");

const ratings = movies.filter((movie) => {
    return movie.score >= 8;
});

ratings.forEach((movie) => {
    console.log(movie.title);
});

console.log("\n");

// ----- 'some()' method
const largeNums = [99, 4423, 2343, 1232, 325239, 99991];
largeNums.some((num) => {
    console.log(num > 1000); // 1 false and 5 true's
});

const isLarge = largeNums.some((num) => {
    return num > 1500; // if anyone is true
});

console.log("\n");

console.log(isLarge);

console.log("\n");

// 'every()' method
largeNums.every((num) => {
    console.log(num > 100); // check for every value, prints false, as 99 < 100
});

console.log("\n");

// ----- 'reduce()' method
const arr3 = [1, 2, 3, 4, 5];
let res = arr3.reduce((acc, currVal) => {
    return acc + currVal;
});

console.log(res);
