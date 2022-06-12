const httpStatus = require('http-status')

class DatabaseError extends Error {

    constructor(err){
        
        if (err instanceof Error){
            super(err.message)
        }
        else{
            super(err)
        }

        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name

        this.status = httpStatus.SERVICE_UNAVAILABLE

        this.type = "DATABASE-ERROR"
    }
}

module.exports = DatabaseError