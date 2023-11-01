import Courses from "../models/Course.js";
import { mutilpleMongooseToObj, singleMongooseToObj } from "../../util/mongoose.js";

class CoursesController {
    // [GET] /courses
    index(req, res, next) {
        Courses.find({})
            .then(
                courses => {
                    res.render('courses', {courses: mutilpleMongooseToObj(courses)});
                }
            )
            .catch(err => next(err));
    };
    // [GET] /courses/:slug
    show(req, res) {
        res.send('courses slug');
    };
};

export default new CoursesController();
