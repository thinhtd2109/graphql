import express from 'express';
import inventoryRoutes from './inventory.router';

const router = express.Router();
router.use('/inventory', inventoryRoutes)
export default router;
