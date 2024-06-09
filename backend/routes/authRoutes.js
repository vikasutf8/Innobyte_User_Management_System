import express from 'express';
const router = express.Router();
import { registerUser, authUser, verifyOTP } from '../controllers/authController.js';

router.post('/signup', registerUser);
router.post('/login', authUser);
router.post('/verify', verifyOTP);

export default router;
