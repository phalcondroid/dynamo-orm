import { DecoratorParamsType } from "types/decorator.type";
import { DyHelperDecorator } from "./utils/decorator-helper.decorators";

export const DyMap = (params: DecoratorParamsType) => {
return (target: Function, property: any) => {
    DyHelperDecorator.storePropertyMetadata(
      { type: 'map', struct: params?.reference },
      property,
      target,
      params
    );
    console.log('subDoc: ', Reflect.getMetadata('__meta__', params?.reference));
  }
}