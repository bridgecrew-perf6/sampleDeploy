const { Schema, model } = require('mongoose')

const humiditySchema = new Schema({
    time: {
        type: Date,
        default: Date.now
    },
    data: {
        type: Number
    }
})

// const Humidity = new Model('Humidity', humiditySchema)

module.exports = model('Humidity', humiditySchema)