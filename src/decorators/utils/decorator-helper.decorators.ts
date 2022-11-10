import { DecoratorParamsType } from "types/decorator.type";

export class DyHelperDecorator {

  /**
   * 
   * @param target 
   * @param table 
   * @returns 
   */
  public static getTableName(target: Function, table?: string): string {
    let tableName = target.name;
    if (table !== '' && table !== null && typeof table !== 'undefined') {
        tableName = table;
    }
    return tableName;
  }

  /**
   * 
   * @param type 
   * @param property 
   * @param target 
   * @param params 
   */
  public static storePropertyMetadata(
    type: object = null,
    property: string = null,
    target: Function,
    params: DecoratorParamsType,
  ): void {
    let tableName = DyHelperDecorator.getTableName(target, params?.tableName);
    let oldMetaData = Reflect.getMetadata('__meta__', target);
    let newMetaData = {};
    let indexTableName = 'tableName';

    if (params?.subDocument && params?.subDocument !== '') {
      indexTableName = 'subDocument';
      tableName = DyHelperDecorator.getTableName(target, params?.subDocument);
    }

    if (typeof oldMetaData === 'undefined') {
        newMetaData = { indexTableName: tableName };
    } else {
        oldMetaData[indexTableName] = tableName;
        newMetaData = oldMetaData;
    }

    if (property !== null) {
      newMetaData[property] = { ...type };
      if (params?.column && params?.column !== '') {
        newMetaData[property].column = params?.column;
      }
    }

    if (typeof newMetaData['__properties__'] === 'undefined') {
      newMetaData['__properties__'] = [];
    }
    if (property) {
      newMetaData['__properties__'].push(property);
    }

    console.log('metaStored', newMetaData);
    Reflect.defineMetadata('__meta__', newMetaData, target);
  }
}