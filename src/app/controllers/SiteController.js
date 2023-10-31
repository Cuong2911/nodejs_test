class SiteController {
    // [GET] /
    index(req, res) {
        res.render('home');
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
