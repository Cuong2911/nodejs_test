import mongoose from "mongoose";
import slug from 'mongoose-slug-generator';

mongoose.plugin(slug);

const { Schema } = mongoose;

const courseSchema = new Schema({
    name: { type: String, default: ''},
    description: { type: String, default: ''},
    image: { type: String, default: ''},
    slug: { type: String, slug: 'name', unique: true},
    videoId: { type: String, default: ''},
    createdAt: { type: Date, default: Date.now},   
    updateAt: { type: Date, default: Date.now},   
}, {
    timestamps: true,
});

const Courses = mongoose.model('Course', courseSchema);

export default Courses;