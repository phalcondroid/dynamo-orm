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
    target: Object,
    params: DecoratorParamsType,
  ): void {
    let tableName = DyHelperDecorator.getTableName(target.constructor, params?.tableName);
    let oldMetaData = Reflect.getMetadata('__meta__', target.constructor);
    let newMetaData = {};
    let indexTableName = '__tableName__';

    if (params?.subDocument && params?.subDocument !== '') {
      indexTableName = '__subDocument__';
      tableName = DyHelperDecorator.getTableName(target.constructor, params?.subDocument);
    }

    if (typeof oldMetaData === 'undefined') {
        newMetaData = { indexTableName: tableName };
    } else {
        oldMetaData[indexTableName] = tableName;
        newMetaData = oldMetaData;
    }
  
    if (property !== null) {
      if (typeof newMetaData['__properties__'] === 'undefined') {
        newMetaData['__properties__'] = [];
      }
      newMetaData[property] = { ...type };
      if (params?.column && params?.column !== '') {
        newMetaData[property].column = params?.column;
        newMetaData['__properties__'].push(params?.column);
      } else {
        newMetaData['__properties__'].push(property);
      }
    }

    Reflect.defineMetadata('__meta__', newMetaData, target.constructor);
  }
}