const temparatureService = require('../services/temparature.service')
const humidityService = require('../services/humidity.service')

const getTemparature = async(req, res, next)=>{
    res.send(await temparatureService.getTemparature())
}

const getHumidity = async(req, res, next)=>{
    res.send(await humidityService.getHumidity())
}

module.exports = {
    getTemparature,
    getHumidity
}