const { Schema, Model, model} = require('mongoose')

const temparatureSchema = new Schema({

    time: {
        type: Date,
        default: Date.now
    },
    data: {
        tyepe: Number
    }
})

// const Temparature = new Model('Temparature', temparatureSchema)

module.exports = model('Temparature', temparatureSchema)