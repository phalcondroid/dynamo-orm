import { DecoratorParamsType } from "types/decorator.type";
import { DyHelperDecorator } from "./utils/decorator-helper.decorators";

export const DyNumber = (params?: DecoratorParamsType): PropertyDecorator => {
  return (target: Function, property: any) => {
    DyHelperDecorator.storePropertyMetadata(
      { type: 'number' },
      property,
      target,
      params
    );
  }
}