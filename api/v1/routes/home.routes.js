const { Router } = require("express");
const homePageController = require("../controller/home.controller")

const router = new Router();

router.get('/', homePageController.loadHomePage)

module.exports = router