const logger = require('../config/loggers/logger')
const httpStatus = require('http-status')

const errorHandler = (err, req, res, next) => {

    returnData = {
        status: err.status || httpStatus.INTERNAL_SERVER_ERROR,
        success: 0,
        data: {
            type: err.type || "GENERIC-ERROR",
            message: err.message,
            stack: err.stack
        }
    }

    logger.error(err)

    return res.status(returnData.status).send(JSON.stringify(returnData, null, 2))
}

module.exports = errorHandler