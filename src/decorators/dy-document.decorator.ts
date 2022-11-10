import { DecoratorParamsType } from "types/decorator.type";
import { DyHelperDecorator } from "./utils/decorator-helper.decorators";

export const DyDocument = (params?: DecoratorParamsType) => {
  return function (target: Function) {
    DyHelperDecorator.storePropertyMetadata(
      null,
      null,
      target,
      params
    );
  };
}
