import express from 'express';
import { default as UploadController } from '../app/controllers/UploadController.js';

const router = express.Router();

router.post('/success', UploadController.uploadPost);
router.get('/success', UploadController.success);
router.get('/', UploadController.index);

export default router;
