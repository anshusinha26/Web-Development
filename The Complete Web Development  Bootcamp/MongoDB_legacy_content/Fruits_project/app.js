const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 0,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema); // Fruits collection, but mongoose will by default do it plural

const fruit = new Fruit({ // fruit document
  name: "Apple",
  rating: 9,
  review: "It's a great fruit!"
});

// fruit.save().then(() => {
//   console.log("Successfully saved the fruits");
// }).catch((error) => {
//   console.log(`Error occured while saving the fruits: ${error}`);
// });

/////

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Great fruit!"
});

pineapple.save();

const People = mongoose.model("People", peopleSchema);

const people = new People({
  name: "Anshu",
  age: 21,
  favouriteFruit: pineapple
})

people.save().then(() => {
  console.log("Successfully saved the people");
}).catch((error) => {
  console.log(`Error occured while saving the people: ${error}`);
});

/////

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "It's the best fruit!"
});

const orange = new Fruit({
  name: "Orange",
  rating: 8,
  review: "It's a sour fruit"
});

// Fruit.insertMany([kiwi, orange], function(err) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("Successfully saved all the fruits to the fruitsDB");
//   }
// })

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  }
  else {
    mongoose.connection.close();

    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id: "63d13f76e3747c9f91337cd3"}, {name: "Peach"}, function(err) {
// if (err) {
// console.log(err);
// }
// else {
// console.log("Successfully updated the document.");
// }
// });

// Fruit.deleteOne({_id: "63d1479b839899731066917a"}, function(err) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("Successfully deleted the document.");
//   }
// });

// People.deleteMany({name: "Anshu"}, function(err) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("Successfully deleted.");
//   }
// });
