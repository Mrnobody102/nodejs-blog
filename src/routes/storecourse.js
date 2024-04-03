var express = require('express');
var router = express.Router();

const storeCourseController = require('../app/controllers/StoreCourseController');

router.use('/', storeCourseController.storecourses);

module.exports = router;