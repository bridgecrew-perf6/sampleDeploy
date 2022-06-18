const { Router } = require("express");
const dataController = require('../controller/sensorData.controller')

const router = new Router();

router.get('/sensorData', dataController.getSensorData)

module.exports = router