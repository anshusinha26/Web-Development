const numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const mappedNumbers = numbers.map(function (num) {
    return num * 2;
});
console.log(mappedNumbers);

//Filter - Create a new array by keeping the items that return true.
const filteredNumbers = numbers.filter(function (num) {
    return num > 10;
});
console.log(filteredNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
const reducedNumber = numbers.reduce(function (acc, num) {
    return acc + num;
});
console.log(reducedNumber);

//Find - find the first item that matches from an array.
const firstNumber = numbers.find(function (num) {
    return num > 10;
});
console.log(firstNumber);

//FindIndex - find the index of the first item that matches.
const firstIndex = numbers.findIndex(function (num) {
    return num > 10;
});
console.log(firstIndex);
