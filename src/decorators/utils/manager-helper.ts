export class ManagerHelper {
  /**
   * 
   * @param obj 
   * @returns 
   */
  public static getObjAsFunction(obj: Object) {
    let entityConstruct = obj as Function;
    if (typeof obj === 'object') {
      entityConstruct = obj.constructor;
    }
    return entityConstruct;
  }
}
