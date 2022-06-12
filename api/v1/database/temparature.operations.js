const mongoose  = require('./connect').mongoose

const Temparature = require('../models/temparature.model')

const getTemparature = async()=>{

    return await Temparature.find({})
}

module.exports = {
    getTemparature
}