const path = require('path')

const loadHomePage = async(req, res, next) => {
    const homePagePath = path.join(path.dirname(__dirname), '/public/views/pages/homePage.ejs')
    // console.log(homePagePath)
    res.render(homePagePath)
}

module.exports = {
    loadHomePage
}