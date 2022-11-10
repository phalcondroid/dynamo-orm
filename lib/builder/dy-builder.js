"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DyBuilder = void 0;
class DyBuilder {
    /**
     *
     */
    queryStruct;
    /**
     *
     * @param table
     * @returns { DyBuilder }
     */
    addTable(table) {
        return this;
    }
    /**
     *
     * @returns
     */
    addFilter() {
        return this;
    }
    addLimit(limit) {
    }
}
exports.DyBuilder = DyBuilder;
