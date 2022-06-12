const mongoose = require('mongoose')
// const logger = require('../config/loggers/logger')
// const DatabaseError = require('../error/database.errors')

async function main() {
    
    let mongo_uri = "mongodb+srv://prani:Prani123@cluster0.ck2e4.mongodb.net/ksetra"
    // process.env.MONGODBURL

    options = {
        connectTimeoutMS: 500
    }

    await mongoose.connect(mongo_uri, options)
    .then(() => {
        console.log("CONNECTION TO DB SUCCESS")
    })
    .catch(err => {throw new DatabaseError(err)})

}
main()
module.exports = {
    mongoose
}