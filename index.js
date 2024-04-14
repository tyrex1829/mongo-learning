const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/movieApp")
    .then(() => {
        console.log("CONNECTION OPEN!!");
    })
    .catch(err => {
        console.log("Oh No, Error!!");
        console.log(err);
    })


// Not a schema, this is just an example how it looks like
// {
//     title: "Amadeus",
//     year: 1986,
//     score: 9.2,
//     rating: "R"
// }

// Schema
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

// model class, with this I can now make new instances of my movie class
const Movie = mongoose.model("Movie", movieSchema);

// process of that => 
// const amadeus = new Movie({ title: "Amadeus", year: 1986, score: 9.2, rating: "R" });

// trying insertMany, usually we don't use this, but trying just to understand, above line commented to try this.

// "C" of CRUD
// Movie.insertMany([
//     { title: "Amelie", year: 2001, score: 8.2, rating: "R" },
//     { title: "Alien", year: 19879, score: 8.1, rating: "R" },
//     { title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG" },
//     { title: "Stand By Me", year: 1986, score: 8.6, rating: "R" },
//     { title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13" }
// ])
//     .then(data => {
//         console.log("It Worked!!!")
//         console.log(data);
//     })

// commented above because doing find stuff, "R" of CRUD

// .find({}).then(data => console.log(data)); // this should be done in node repl after .load index.js

