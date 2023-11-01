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
    // [GET] /courses/:slug  //course detail
    course(req, res) {
        Courses.findOne({ slug: req.params.slug})
            .then(
                course => {
                    res.render('courseDetail', {course: singleMongooseToObj(course)});
                }
            )
            .catch(err => next(err));
    };
};

export default new CoursesController();
