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

const temparatureSchema = new mongoose.Schema({
  time: {
      type: Date,
      default: Date.now
  },
  data: {
      type: Number,
  }
})

const Temparature = mongoose.model('temparature', temparatureSchema)

const fs = require('fs')

const data = fs.readFile('/Users/vinodpatil/Downloads/development/data/temparature.json', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return;
      }
      // console.log("File data:", JSON.parse(jsonString.toString()));
      Temparature.insertMany(JSON.parse(jsonString.toString()))
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.error(err)
      })
})

