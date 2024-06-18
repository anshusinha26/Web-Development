// console.log("Hello world!");

// Objects
const customerDetails = {
    username: "anshusinha26",
    password: "iNvalidpassw0rd!",
    email: "anshujuly2@gmail.com",
    age: 21,
};

console.log(customerDetails);

console.log(customerDetails["username"]);
console.log(typeof customerDetails["age"]);
console.log(customerDetails.password);

customerDetails["Full name"] = "Anshu Sinha";
console.log(customerDetails);

customerDetails["Favorite films"] = ["Interstellar", "Gravity", "The Martian"];
console.log(customerDetails);
