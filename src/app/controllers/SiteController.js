const Course = require('../controllers/models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    // [GET] /
    index(req, res, next) {

        Course.find({})
            .then(courses => {
                res.render('home', {
                    title: "My courses",
                    courses : multipleMongooseToObject(courses)});
            })
            .catch(next);
        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
