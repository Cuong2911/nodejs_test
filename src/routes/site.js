import express from 'express';
import { default as siteController } from '../app/controllers/SiteController.js';

const router = express.Router();

router.get('/search', siteController.search);
router.get('/results', siteController.results);
router.get('/:slug', siteController.notFound);
router.get('/', siteController.index);

export default router;
