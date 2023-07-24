
import { Request, Response } from 'express';
import Container, { Inject, Service } from "typedi";
import { InventoryService } from './inventory.service';

@Service()
export class InventoryController {
  private inventoryService: InventoryService;
  constructor(
    @Inject() inventoryService: InventoryService,
  ) {
    this.inventoryService = inventoryService;
  }
  async updateInventory(req: Request, res: Response) {
    return await this.inventoryService.updateInventory()
  }
}