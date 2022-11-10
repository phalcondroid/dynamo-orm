import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export class DyManager {

  private _client: DynamoDBClient;

  public setClient(client: DynamoDBClient) {
    this._client = client;
  }

  public async find<Entity>(entity: Entity): Promise<Entity[]> {
    return [entity];
  }

  public async findOne<Entity>(entity: Entity, ): Promise<Entity> {
    return entity;
  }

  public async save<Entity>(entity: Entity): Promise<boolean> {
    if (typeof entity === 'object') {
      return this.update(entity);
    }
    
    return true;
  }

  public async update<Entity>(entity: Entity): Promise<boolean> {
    return true;
  }

  public async delete<Entity>(entity: Entity): Promise<boolean> {
    return true;
  }
}