import express from 'express';
import { default as profileDetailController } from '../app/controllers/profile/ProfileDetailController.js';

const router = express.Router();

router.get('/detail', profileDetailController.detail);
router.get('/', profileDetailController.index);

export default router;
