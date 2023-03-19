const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "No name specified. Please write a name"] // the name is required to the data
    },
    rating: {
        type: Number, 
        min: 1, // min of 1 and max of 10 (validation)
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: 8,
    review: "Great fruit"
});

//fruit.save(); Saves just one

const orange = new Fruit({
    name: "Orange",
    rating: 10,
    review: "Nice fruit"
});

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 9,
    review: "Good fruit"
});

const banana = new Fruit({
    name: "Banana",
    rating: 7,
    review: "Ok fruit"
});

// Save more than one fruit
/*Fruit.insertMany([kiwi, banana, orange]).then(function(){
    console.log("Data inserted")
}).catch(function(error){
    console.log(error)
});*/

// to find and print the fruits on the terminal

/*Fruit.find({}, function(err, fruits){
    if (err) {
        console.log(err);
    } else {
        console.log(fruits);
    }
});*/

mongoose.connection.close();

//-------------------------------------------------
//-------------------------------------------------

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name: "John",
    age: 37,
    favouriteFruit: orange
});

//person.save();