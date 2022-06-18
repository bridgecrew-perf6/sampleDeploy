const sensorDataService = require('../services/sensorData.service')

const getSensorData = async(req, res, next) => {
    requestData = req.body

    deviceID = requestData['deviceID']

    // console.log(device_id)
    res.send(await sensorDataService.getSensorData(deviceID))
}

module.exports = {
    getSensorData
}