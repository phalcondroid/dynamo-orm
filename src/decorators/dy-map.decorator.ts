import { DecoratorParamsType } from "types/decorator.type";
import { DyHelperDecorator } from "./utils/decorator-helper.decorators";

export const DyMap = (params: DecoratorParamsType): PropertyDecorator => {
return (target: Function, property: any) => {
    DyHelperDecorator.storePropertyMetadata(
      { type: 'map', struct: params?.reference },
      property,
      target,
      params
    );
  }
}