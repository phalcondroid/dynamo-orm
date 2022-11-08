import { IQueryStruct } from "types/query-struct.type";

export class DyBuilder {
    
    /**
     * 
     */
    protected queryStruct: IQueryStruct;

    /**
     * 
     * @param table 
     * @returns { DyBuilder }
     */
    public addTable<Table>(table: Table): DyBuilder {
        return this;
    }

    /**
     * 
     * @returns 
     */
    public addFilter(): DyBuilder {

        return this;
    }

    public addLimit(limit: number) {
        
    }
}