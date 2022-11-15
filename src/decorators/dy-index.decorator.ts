import { DecoratorParamsType } from "types/decorator.type";
import { DyHelperDecorator } from "./utils/decorator-helper.decorators";

export const DyIndex = (params?: DecoratorParamsType): PropertyDecorator => {
  return (target: Function, property: any) => {
    DyHelperDecorator.storePropertyMetadata(
      { type: 'index' },
      property,
      target,
      params
    );
  }
}
