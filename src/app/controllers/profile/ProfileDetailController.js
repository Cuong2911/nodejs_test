
class ProfileDetailController {
    // [GET] /
    index(req, res) {
        res.redirect('/profile/detail');
    };
    // [GET] /profile detail
    detail(req, res) {
        res.render('profile/profileDetail');
    }
}

export default new ProfileDetailController();
