const mongoose = require('mongoose')
const logger = require('../config/loggers/logger')
const DatabaseError = require('../error/database.errors')

async function main() {
    
    let mongo_uri = process.env.MONGODBURL

    options = {
        connectTimeoutMS: 500
    }

    await mongoose.connect(mongo_uri, options)
    .then(() => {
        logger.info("CONNECTION TO DB SUCCESS")
        // check()
        // .then(data => {logger.warn( JSON.stringify(data))})
        // .catch(err => {logger.error(err)})
    })
    .catch(err => {
        // console.log(err);
        throw new DatabaseError(err);
    })

}
main()
// const check = async() => {
//     var { db } = mongoose.connection;
//     // logger.warn("RESULT : "+result)
//     return await db.collection('sasya-swastha').find().toArray();
// }
module.exports = {
    mongoose
}