import { default as coursesRouter } from './courses.js';
import { default as siteRouter } from './site.js';

function route(app) {
    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);
}

export default route;
