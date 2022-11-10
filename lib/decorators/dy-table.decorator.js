"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DyTable = void 0;
require("reflect-metadata");
const string_helper_decorators_1 = require("./utils/string-helper.decorators");
const DyTable = (table) => {
    return function (target) {
        const tableName = string_helper_decorators_1.DyHelperDecorator.getTableName(target, table);
        console.log('wtf8');
        Reflect.defineMetadata(`entityClassMetadata`, {
            tableName
        }, {});
    };
};
exports.DyTable = DyTable;
