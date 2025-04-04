// /routes/formRoutes.js

import express from 'express';
import { submitForm } from '../controllers/FormController.js';

const router = express.Router();

// POST route for form submission
router.post('/submit', submitForm);

export default router;
