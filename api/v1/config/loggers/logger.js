const { createLogger, format, transports, config } = require('winston')
const { combine, timestamp, label, printf, errors, colorize, prettyPrint, json } = format

const options = {

    file: {
        level: "info",
        filename: '../logs/app.log',
        handleException: true,
        maxsize: 5242880,
        json: true
    },

    console: {
        level: "debug",
        handleException: true,
        json: false
    },

    formatter: combine(
        prettyPrint(),
        timestamp(),
        errors({stack: true}),
        printf((info) => {
            return `${info.timestamp} - [${info.level.toUpperCase().padEnd(7)}] - ${info.stack || info.message}`
        }),
    )
}

const logger = createLogger({
    format: options.formatter,
    levels: config.npm.levels,
    transports: [
        // new transports.File(options.file),
        new transports.Console(options.console)
    ],
    exitOnError: false
})


module.exports = logger