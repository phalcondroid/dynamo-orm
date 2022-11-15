import Aws from 'aws-sdk';
import { ManagerHelper } from './decorators/utils/manager-helper';
import { DyHydrator } from './actions/dy-hydrator';

export class DyManager {

  private _client: Aws.DynamoDB;

  public setClient(client: Aws.DynamoDB) {
    this._client = client;
  }

  public async find<Entity>(entity: Entity): Promise<Entity[]> {
    return [entity];
  }

  public async findOne<Entity>(entity: any, params: Record<string, any>): Promise<Entity> {
    let items = {};
    const entityAsFunction = ManagerHelper.getObjAsFunction(entity);
    const entityMetadata = Reflect.getMetadata('__meta__', entityAsFunction);
    for (let property in params) {
      items = { ...items, ...this.setData(
        params,
        entityMetadata,
        property
      ) };
    }
    const struct = {
      Key: items,
      TableName: 'Client'
    };
    // console.log('findlord', struct);
    const { Item } = await this._client.getItem(struct).promise();

    // console.log('findlord2', Item);
    const hydrated = DyHydrator.hydrate(entity, Item);

    // console.log('the clone', hydrated);
    return hydrated;
  }

  public async save<Table>(entity: Table): Promise<boolean> {
    const entityAsFunction = ManagerHelper.getObjAsFunction(entity);
    const entityMetadata = Reflect.getMetadata('__meta__', entityAsFunction);
    let items = {}
    for (const property of entityMetadata['__properties__']) {
      // console.log('properties', property, entity[property]);
      items = { ...items, ...this.setData(
        entity,
        entityMetadata,
        property
      ) };
    }
    let dataInsert = {
      'TableName': entityMetadata['__tableName__'],
      'Item': items
    };
    try {
      await this._client.putItem(dataInsert, (err: AWS.AWSError, data) => {
        console.log('lo error', err?.message, err?.cause, err?.code, err);
      }).promise();
    } catch(e) {
      console.error('irror', e);
    }
    // console.log(util.inspect(dataInsert, {showHidden: false, depth: null, colors: true}))
    return true;
  }

  private setData(entity, entityMetadata, property) {
    let items = {};
    switch (entityMetadata[property].type) {
      case 'string':
      case 'index':
        items[property] = {
          S: entity[property].toString()
        }
      break;
      case 'number':
        items[property] = {
          N: entity[property].toString()
        }
      break;
      case 'boolean':
        items[property] = {
          BOOL: entity[property]
        }
      break;
      case 'map':
        // console.log('map', entity[property],'-', entityMetadata[property],'-', property);
        items[property] = this.setMap(entity[property]);
      break;
      case 'collection':
        // console.log('collection', entity[property],'-', entityMetadata[property], '-', property);
        let list = [];
        for (const collectionItem of entity[property]) {
          list.push(this.setMap(collectionItem))
        }
        items[property] = {
          L: list
        }
      break;
    }
    return items;
  }

  private setMap(entity) {
    const entityMap = entity;
    const mapAsFunction = ManagerHelper.getObjAsFunction(entityMap);
    const mapMetadata = Reflect.getMetadata('__meta__', mapAsFunction);
    let mapData = {};
    for (const mapProperty of mapMetadata['__properties__']) {
        mapData = { ...mapData, ...this.setData(
        entityMap,
        mapMetadata,
        mapProperty
      ) }
    }
    return { M: mapData }
  }

  public async update<Entity>(entity: Entity): Promise<boolean> {
    return true;
  }

  public async delete<Entity>(entity: Entity): Promise<boolean> {
    return true;
  }
}