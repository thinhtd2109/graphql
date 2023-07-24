import express, { Request, Response } from 'express';
import { InventoryController } from '../src/inventory/inventory.controller';
import 'reflect-metadata';
import Container from 'typedi';

const router = express.Router();
const inventoryController = Container.get(InventoryController);

router.post('/update-inventory', async (req: Request, res: Response) => {
    const result = await inventoryController.updateInventory(req, res);
    return res.json(result)
});

export default router;
