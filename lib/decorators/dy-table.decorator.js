"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DyTable = void 0;
require("reflect-metadata");
function DyTable(table) {
    return function (target) {
        let tableName = target.name;
        if (table !== '' && table !== null && typeof table !== 'undefined') {
            tableName = table;
        }
        Reflect.defineMetadata(`${tableName}_table_name`, tableName, target);
    };
}
exports.DyTable = DyTable;
