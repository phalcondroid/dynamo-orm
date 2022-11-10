"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DyQueryBuilder = void 0;
const dy_builder_1 = require("./dy-builder");
class DyQueryBuilder extends dy_builder_1.DyBuilder {
    /**
     *
     * @returns
     */
    addKeyCondition(params) {
        return this;
    }
    async get() {
        return;
    }
}
exports.DyQueryBuilder = DyQueryBuilder;
