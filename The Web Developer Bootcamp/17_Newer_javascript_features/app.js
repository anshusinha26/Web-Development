// ----- Default params
function add(val1, val2 = 1) {
    console.log(val1 + val2);
}

add(9);
add(5, 4);

console.log("\n");

// ----- Spread in function cells
const nums = [134, 545, 453, 54634, 2345342, 23, 234324];
console.log(Math.max(...nums)); // this is same as Math.max(134, 545, 453, 54634, 2345342, 23, 234324)

// ----- Spread with array literals
const easternCountries = [
    "India",
    "China",
    "Japan",
    "Russia",
    "North Korea",
    "South Korea",
];
const westernCountries = ["USA", "Canada", "Brazil", "Ecuador", "Mexico"];

const allCountries = [...easternCountries, ...westernCountries];

console.log(allCountries);

// ----- Array destructuring
const nums2 = [1, 2, 3, 4, 5];
let [val1, val2, val3] = nums2;

console.log(val1, val2, val3);

console.log("\n");

// ----- Destructuring objects
const countryCap = {
    India: "New Delhi",
    China: "Beijing",
    Russia: "Moscow",
    Pakistan: "Islamabad",
    Nepal: "Kathmandu",
};
let { India, China, Nepal } = countryCap;

console.log(India, China, Nepal);
