import express from 'express';
import { default as siteController } from '../app/controllers/SiteController.js';

const router = express.Router();

router.use('/search', siteController.search);
router.use('/results', siteController.results);
router.use('/upload', siteController.upload);
router.use('/:slug', siteController.notFound);
router.use('/', siteController.index);

export default router;
