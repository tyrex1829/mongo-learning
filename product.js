const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/shopApp")
    .then(() => {
        console.log("CONNECTION OPEN!!");
    })
    .catch(err => {
        console.log("Oh No, Error!!");
        console.log(err);
    })


// this is a normal way of schema
// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     isOnSale: Boolean
// })


// longer way
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

// model instance method
productSchema.methods.greet = function() {
    console.log("Hello!!!!")
    console.log(`from ${this.name}`)
}

const Product = mongoose.model("Product", productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({name: "Bike Helmet"})
    foundProduct.greet();
}

findProduct();

// const bike = new Product({
//     name: "Mountain Bike",
//     price: 999,
//     color: "red"
// });

// bike.save()
//     .then(data => {
//         console.log("It Worked!!");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("Oh No Error!!");
//         console.log(err);
//     })