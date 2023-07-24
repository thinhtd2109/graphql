import { Inject, Service } from "typedi";
import { GraphqlService } from "../../services/graph.service";
import 'reflect-metadata'

@Service()
export class InventoryGateway {
  private graphqlService: GraphqlService;
  constructor(@Inject() graphqlService: GraphqlService) {
    this.graphqlService = graphqlService;
  }
  async getInventories() {
    const response = await this.graphqlService.query({
      query: `
      query getInventories {
        results: oms_inventory(where: {
          created: {
            _lte: "2023-07-07"
          }
        }) {
          id
          warehouse
          product_variation
          batch_code
          oms_product_variation {
            id
            sku
            oms_product {
              merchant
            }
          }
          master_warehouse {
            id
            code
          }
        }
      }
      
      `,
      variables: {}
    });

    return response.data.results;
  }

  async getStockItems() {
    const response = await this.graphqlService.query({
      query: `
      {
        results: oms_inventory_stock_item {
          batch_code
          id
          product_variation
          oms_inventory_stock {
            warehouse
            master_warehouse {
              code
            }
          }
          oms_product_variation {
            sku
          }
        }
      }
      
      `,
      variables: {}
    });

    return response.data.results;
  }
  async update({ update_stock_items,
    update_inventories }) {
    const response = await this.graphqlService.query({
      query: `
      mutation ($update_inventories: [oms_inventory_updates!]!, $update_stock_items: [oms_inventory_stock_item_updates!]!) {
        update_oms_inventory_many(updates: $update_inventories) {
          affected_rows
        }
        update_oms_inventory_stock_item_many(updates: $update_stock_items) {
          affected_rows
        }
      }
      
      `,
      variables: {
        update_stock_items,
        update_inventories
      }
    });
    return response.data
  }
}