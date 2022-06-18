const mongoose  = require('./connect').mongoose

const { dataSchema } = require('../models/sensorData.model')

const getAllData = async(deviceID=1)=>{
    const DataModel = new mongoose.model('device-'+deviceID, dataSchema)
    return await DataModel.find({})
}

module.exports = {
    getAllData
}