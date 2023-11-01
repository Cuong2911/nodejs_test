import express from 'express';
import { default as coursesController } from '../app/controllers/CoursesController.js';

const router = express.Router();

router.get('/:slug', coursesController.course);
router.get('/', coursesController.index);

export default router;
