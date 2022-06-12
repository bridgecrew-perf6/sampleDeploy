const { Router } = require("express");
const dataController = require('../controller/data.controller')

const router = new Router();

router.get('/temparature', dataController.getTemparature)
router.get('/humidity', dataController.getHumidity)

module.exports = router