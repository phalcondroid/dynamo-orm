export interface IAttrValues {
    [boundedParam: string]: { 
        [
            dynamoAttrType: string
        ]: number | string | boolean 
    }
}

export interface IQueryStruct {
    FilterExpression: string;
    KeyConditionExpression: string,
    ExpressionAttributeValues: IAttrValues,
    ProjectionExpression: string,
    TableName: string,
    Limit?: number
}