import Courses from "../models/Course.js";


class SiteController {
    // [GET] /
    async index(req, res) {

        const instance = await Courses.find({ });
        console.log(instance);
        res.json(instance);
    }
    // [GET] /:slug
    notFound(req, res) {
        res.render('notFound');
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
    // [GET] /results
    results(req, res) {
        res.render('results');
    }
    // [GET] /upload
    upload(req, res) {
        res.render('upload');
    }
}

export default new SiteController();
