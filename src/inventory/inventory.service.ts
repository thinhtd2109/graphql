import { Inject, Service } from "typedi";
import { InventoryGateway } from "./inventory.gateway";
import _ from 'lodash'
import 'reflect-metadata'

@Service()
export class InventoryService {
  private inventoryGateway: InventoryGateway;
  constructor(@Inject() inventoryGateway: InventoryGateway) {
    this.inventoryGateway = inventoryGateway;
  }
  async updateInventory() {

  }
}  