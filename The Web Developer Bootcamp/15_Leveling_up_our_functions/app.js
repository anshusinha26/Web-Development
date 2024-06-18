// ----- Function scope

// local scope
function greet() {
    let msg = "Hello world!"; // local variable
    console.log(msg);
}

greet();
// console.log(msg); // error

console.log("\n");

// global scope
let msg2 = "Hola mundo!"; // global variable
function greetInSpanish() {
    console.log(msg2);
}

greetInSpanish();

console.log("\n");

// ----- Function expressions
let add = function (x, y) {
    console.log(x + y);
};

add(1, 9);

console.log("\n");

// ----- Higher order functions
function callTwice(funcName) {
    funcName();
    funcName();
}

let rollDice = function () {
    let diceNum = Math.floor(Math.random() * 6 + 1);
    console.log(diceNum);
};

callTwice(rollDice);

console.log("\n");

// ----- Returning functions
function mysteryFunction() {
    let randomNum = Math.random();
    if (randomNum > 0.5) {
        return function () {
            console.log("You win!");
        };
    } else {
        return function () {
            console.log("You lose!");
        };
    }
}

let caughtReturnedFunction = mysteryFunction();
caughtReturnedFunction();

console.log("\n");

// ----- Defining methods
const myMethods = {
    PI: 3.14,
    add: function (val1, val2) {
        console.log(val1 + val2);
    },
    square: function (val1) {
        console.log(val1 * val1);
    },
};

console.log(myMethods.PI);
myMethods.add(1, 7);
myMethods.square(9);

console.log("\n");

// ----- 'this' keyword
const myDog = {
    name: "Ledu",
    cuteness: "very high",
    charm: "incredible",
    says() {
        console.log(`${this.name} says bhow bhow!!`);
    },
};

myDog.says();
const tells = myDog.says;
tells();

console.log("\n");

// ----- Try/Catch
function check() {
    try {
        console.log(hello.toUpperCase());
    } catch (e) {
        console.log(e);
        console.log("Please pass a string!");
    }
}

check();
