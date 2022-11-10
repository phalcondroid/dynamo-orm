import { DecoratorParamsType } from "types/decorator.type";
import { DyHelperDecorator } from "./utils/decorator-helper.decorators";

export const DyString = (params?: DecoratorParamsType) => {
  return (target: Function, property: any) => {
    DyHelperDecorator.storePropertyMetadata(
      { type: 'string' },
      property,
      target,
      params
    );
  }
}
