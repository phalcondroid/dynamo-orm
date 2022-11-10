import { DecoratorParamsType } from 'types/decorator.type';
import { DyHelperDecorator } from "./utils/decorator-helper.decorators";

export const DyBoolean = (params?: DecoratorParamsType) => {
  return (target: Function, property: any) => {
    DyHelperDecorator.storePropertyMetadata(
      { type: 'boolean' },
      property,
      target,
      params
    );
  };
}