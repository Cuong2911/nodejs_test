import { default as coursesRouter } from './courses.js';
import { default as uploadRouter } from './upload.js'
import { default as profileRouter } from './profile.js';
import { default as siteRouter } from './site.js';

function route(app) {
    app.use('/courses', coursesRouter);
    app.use('/upload', uploadRouter);
    app.use('/profile', profileRouter);
    app.use('/', siteRouter);
}

export default route;
