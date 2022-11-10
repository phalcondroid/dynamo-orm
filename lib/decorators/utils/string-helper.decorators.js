"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DyHelperDecorator = void 0;
class DyHelperDecorator {
    /**
     *
     * @param target
     * @param table
     * @returns
     */
    static getTableName(target, table) {
        let tableName = target.name;
        if (table !== '' && table !== null && typeof table !== 'undefined') {
            tableName = table;
        }
        return tableName;
    }
}
exports.DyHelperDecorator = DyHelperDecorator;
