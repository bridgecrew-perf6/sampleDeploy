const dataOperations = require('../database/sensorData.operator')


const getSensorData = async(deviceID)=>{

    return await dataOperations.getAllData(deviceID)
}

module.exports = {
    getSensorData
}