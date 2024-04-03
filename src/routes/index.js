const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./course');
const createCourseRouter = require('./createcourse');
const storeCourseRouter = require('./storecourse');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/storecourse', storeCourseRouter);
    app.use('/createcourse', createCourseRouter);
    app.use('/', siteRouter);
}

module.exports = route;
