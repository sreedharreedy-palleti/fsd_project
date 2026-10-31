import express from 'express';
import { handleContactSubmit } from './contactController.js';

const router = express.Router();

router.post('/', handleContactSubmit);

export default router;