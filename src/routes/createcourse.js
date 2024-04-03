var express = require('express');
var router = express.Router();

const createCourseController = require('../app/controllers/CreateCourseController');

router.get('/', createCourseController.createcourse);

module.exports = router;