// const { mongoose } = require('./connect')
// const seedFile = require('../models/humiditySensor.model')
const mongoose = require('mongoose')

let mongo_uri = "mongodb+srv://prani:Prani123@cluster0.ck2e4.mongodb.net/ksetra"
    // process.env.MONGODBURL
options = {
  connectTimeoutMS: 500
}

mongoose.connect(mongo_uri, options)
.then(() => {
  console.log("CONNECTION TO DB SUCCESS")
})
.catch(err => {throw new DatabaseError(err)})

// const dataSchema = new mongoose.Schema()

// const Humidity = mongoose.model('demo')

// const fs = require('fs')

// const data = fs.readFile('/Users/vinodpatil/Downloads/development/data/sample_json_data.json', (err, jsonString) => {
//     if (err) {
//         console.log("File read failed:", err);
//         return;
//       }
//       // console.log("File data:", JSON.parse(jsonString.toString()));
//       Humidity.insertMany(JSON.parse(jsonString.toString()))
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//         console.error(err)
//       })
// })

// const demoSchema = new mongoose.Schema({}, { strict: false});

// const Demo = mongoose.model('demo', demoSchema)

// data = [
//     {
//         name: "vinod",
//         age: 25
//     },
//     {
//         name: "pradeep",
//         age: 25
//     },
//     {
//         name: "shubham",
//         age: 26
//     },
//     {
//         name: "kartik",
//         age: 26
//     }
// ]

// Demo.insertMany(data)
// .then(resp => {
//     console.log(resp)
// })
// .catch(err => {
//     console.log(err)
// })