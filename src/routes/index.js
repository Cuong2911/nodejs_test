import { default as newsRouter } from './news.js';
import { default as siteRouter } from './site.js';

function route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

export default route;
