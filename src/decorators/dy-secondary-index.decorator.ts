import { DecoratorParamsType } from "types/decorator.type";
import { DyHelperDecorator } from "./utils/decorator-helper.decorators";

export const DySecondaryIndex = (params?: DecoratorParamsType): PropertyDecorator => {
  return (target: Function, property: any) => {
    DyHelperDecorator.storePropertyMetadata(
      { type: 'secondary-index' },
      property,
      target,
      params
    );
  }
}
