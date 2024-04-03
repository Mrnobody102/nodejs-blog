const Course = require('../controllers/models/Course');

class CreateCourseController {
    // [GET] /createcourse
    createcourse(req, res, next){
        res.render('courses/create');
    }
}

module.exports = new CreateCourseController();
