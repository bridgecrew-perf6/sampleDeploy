const temparatureOperation = require('../database/temparature.operations')

const getTemparature = async()=>{

    return await temparatureOperation.getTemparature()
}

module.exports = {
    getTemparature
}