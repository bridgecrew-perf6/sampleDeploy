require('dotenv').config()

const path = require('path')

const express = require('express')
const app = express()

const logger = require('./api/v1/config/loggers/logger')
const httpLogger = require('./api/v1/config/loggers/http.logger')
const errorHandler = require('./api/v1/middlewares/error.handler')

app.use(httpLogger)
app.use(express.static(path.join(__dirname, '/api/v1/public')))
app.use(express.json())

app.set('view engine', 'ejs');

const homeRouter = require('./api/v1/routes/home.routes')
const dataroutes = require('./api/v1/routes/data.routes')
//mongo test
// const mongo = require('./api/v1/database/connect')

app.use('/', homeRouter)
app.use('/data', dataroutes)

app.use(errorHandler)

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    logger.info("APPLICATION LISTENING ON PORT : "+port)
})