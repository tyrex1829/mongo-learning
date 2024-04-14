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
const amadeus = new Movie({ title: "Amadeus", year: 1986, score: 9.2, rating: "R" });