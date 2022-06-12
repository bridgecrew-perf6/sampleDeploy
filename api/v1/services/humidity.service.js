const humidityOperations = require('../database/humidity.operations')


const getHumidity = async()=>{

    return await humidityOperations.getHumidity()
}

module.exports = {
    getHumidity
}