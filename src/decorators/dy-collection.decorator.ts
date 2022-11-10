import { DecoratorParamsType } from "types/decorator.type";
import { DyHelperDecorator } from "./utils/decorator-helper.decorators";

export const DyCollection = (params: DecoratorParamsType) => {
  return (target: Function, property: any) => {
    DyHelperDecorator.storePropertyMetadata(
      { type: 'collection', struct: params?.reference },
      property,
      target,
      params
    );
  }
}