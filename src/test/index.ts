import { User, Client } from "./user.table";
import Aws from 'aws-sdk';
import DynamoDB, { AttributeValue } from 'aws-sdk/clients/dynamodb';
import { DyManager } from "../dy-manager";

// Connection
const dynamo = new Aws.DynamoDB({
  region: 'local',
  endpoint: 'http://localhost:8000',
});

// console.log('conn', dynamo);

// Dynamo manager instance
const manager = new DyManager();
manager.setClient(dynamo);

(async () => {

  const user2 = new User();
  user2.userName = 'Username 2';
  user2.identify = 1016;
  user2.exist = true;

  const client = new Client();
  client.clientId = '2';
  client.clientName = 'Test1';
  client.phone = 301273;
  client.active = true;
  client.user = user2;
  client.userList = [user2];

  await manager.save(client);

  const clientResult = await manager.findOne<Client>(Client, { 'clientId': 2 });
  console.log('client result: ', clientResult);
})();