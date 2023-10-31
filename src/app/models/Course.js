import mongoose from "mongoose";

const { Schema } = mongoose;

const courseSchema = new Schema({
    name: { type: String, default: ''},
    description: { type: String, default: ''},
    image: { type: String, default: ''},
    createdAt: { type: Date, default: Date.now},   
    updateAt: { type: Date, default: Date.now},   
});

const Courses = mongoose.model('Course', courseSchema);

export default Courses;