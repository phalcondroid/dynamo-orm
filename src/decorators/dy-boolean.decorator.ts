import { DecoratorParamsType } from 'types/decorator.type';
import { DyHelperDecorator } from "./utils/decorator-helper.decorators";

export function DyBoolean(params?: DecoratorParamsType): PropertyDecorator {
  return (target: any, property: any) => {
    target[property] = false;
    DyHelperDecorator.storePropertyMetadata(
      { type: 'boolean' },
      property,
      target,
      params
    );
  };
}