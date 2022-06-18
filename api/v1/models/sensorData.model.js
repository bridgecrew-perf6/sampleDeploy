const { Schema } = require('mongoose')

const dataSchema = new Schema({}, {strict: false})

module.exports = {
    dataSchema
}