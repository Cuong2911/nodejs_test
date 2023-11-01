
class UploadController {
    // [GET] /
    index(req, res) {
        res.render('upload');
    };
    //[GET] /upload/success
    success(req, res) {
        res.send('success');
    }; 
    // [POST]
    uploadPost(req, res) {
        res.send();
    }
}

export default new UploadController();
