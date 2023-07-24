import { createClient, QueryOptions } from "graphqurl";
import { Service } from "typedi";
const GRAPHQL_ENDPOINT = 'https://oms-staging.hasura.app/v1/graphql';
const GRAPHQL_ADMIN_SECRET = 'wfF84J0Y8zjorVztGjO3d2PLcBBbiCjP1WV7Xq4CVRBpwoWS7J9kP7KtNATfOS09';

@Service()
export class GraphqlService {
  public client: any;
  constructor() {
    this.client = createClient(
      {
        endpoint: GRAPHQL_ENDPOINT,
        headers: {
          'x-hasura-admin-secret': GRAPHQL_ADMIN_SECRET,
        }
      }
    )
  }

  async query(payload: QueryOptions): Promise<any> {
    var res = await this.client.query(payload)
      .catch(async (errors: any) => {
        throw errors
      });

    return res;
  }


}
