// function 'greet()'
function greet() {
    console.log("Hello world!");
}

greet();

console.log("\n");

// function with argument and parameters
function greetWithName(name) {
    // name - parameter
    console.log(`Hello ${name}!`);
}

greetWithName("Tim"); // Tim - argument

console.log("\n");

// ----- Function with multiple parameters
function add(val1, val2) {
    console.log(val1 + val2);
}

add(1, 2);

console.log("\n");

// ----- 'return' keyword
function add2(val1, val2) {
    return val1 + val2;
}

console.log(add2(2, 3));
