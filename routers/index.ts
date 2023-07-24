import express from 'express';
import userRoutes from './user.router';

const router = express.Router();
router.use('/user', userRoutes)
export default router;
