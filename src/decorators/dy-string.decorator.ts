import { DecoratorParamsType } from "types/decorator.type";
import { DyHelperDecorator } from "./utils/decorator-helper.decorators";

export const DyString = (params?: DecoratorParamsType): PropertyDecorator => {
  return (target: any, property: any) => {
    DyHelperDecorator.storePropertyMetadata(
      { type: 'string' },
      property,
      target,
      params
    );
  }
}
