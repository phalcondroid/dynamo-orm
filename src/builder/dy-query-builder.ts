import { DyBuilder } from "./dy-builder";

export class DyQueryBuilder extends DyBuilder {
    /**
     * 
     * @returns 
     */
    public addKeyCondition(params: Record<string, string | number | boolean>): DyBuilder {
        
        return this;
    }

    public async get<Table>(): Promise<Table> {
        return ;
    }
}