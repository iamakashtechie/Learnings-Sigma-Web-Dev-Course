// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection 

const express = require('express')
const mongoose = require('mongoose');
const Employee = require("./models/employeeSchema")

let conn = mongoose.connect('mongodb://localhost:27017/company');
// console.log(conn);

const app = express();
const port = 3000;

app.use(express.static('templates'));

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(getRandomInt(1, 10));

let names = ["Harry", "Ron", "Hermoine", "Draco", "Luna", "Neville", "Ginny", "Fred", "George", "Cho"];
let salaries = [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000];
let languages = ["Python", "Java", "JavaScript", "C", "C++", "Ruby", "Go", "Rust", "Kotlin", "Swift"];
let cities = ["New York", "London", "Paris", "Tokyo", "Kolkata", "Delhi", "Mumbai", "Los Angeles", "Chicago", "Sydney"];
let isManager = [true, false];

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/templates/index.html");
})

app.get('/generate', async (req,res) => {

    // Clear the collection Employee
    await Employee.deleteMany({}).then(() => {
        console.log("Collection Cleared");
    });

    // Generate 10 random records and insert into Employee collection
    for (let i = 0; i < 10; i++) {
        let collection = await Employee.create ({
            name: names[getRandomInt(0, 9)],
            salary: salaries[getRandomInt(0, 9)],
            language: languages[getRandomInt(0, 9)],
            city: cities[getRandomInt(0, 9)],
            isManager: isManager[getRandomInt(0, 1)]?true:false
        });
        console.log(collection);
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log("http://localhost:3000/");
})