"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DyString = void 0;
const string_helper_decorators_1 = require("./utils/string-helper.decorators");
const DyString = (target, memberName) => {
    const tableName = string_helper_decorators_1.DyHelperDecorator.getTableName(target);
    const key = `entityClassMetadata`;
    console.log('wtf7');
    console.log('ave maria jom: ', Reflect.getMetadata('entityClassMetadata', {}));
};
exports.DyString = DyString;
