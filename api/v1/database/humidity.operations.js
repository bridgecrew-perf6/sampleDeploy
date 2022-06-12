const mongoose  = require('./connect').mongoose

const Humidity = require('../models/humiditySensor.model')

const getHumidity = async()=>{

    return await Humidity.find({})
}

module.exports = {
    getHumidity
}