import { User, Client } from "./user.table";

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// Set the AWS Region.
const REGION = 'REGION'; // e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.
const dynamoDbClient = new DynamoDBClient({ region: REGION });

const user = new User();

console.log('--->', typeof user, ' <--> ', typeof User);

// console.log('instance.client', Reflect.getMetadata('__meta__', Client));