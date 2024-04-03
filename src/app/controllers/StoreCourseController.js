const Course = require('../controllers/models/Course');

class StoreCourseController {
    // [GET] /createcourse
    storecourses(req, res, next) {
        // res.json(req.body);
        const course = new Course(req.body);
        course.save();

        res.send('SUCCESSFULLY!')
    }
}

module.exports = new StoreCourseController();