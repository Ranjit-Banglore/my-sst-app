import {DynamoDB} from "aws-sdk";

const dynamoDb = new DynamoDB.DocumentClient();

export async function createItem(name:string, description:string) {

    const id = Date.now().toString();
    const timestamp = Date.now();

    const item = {
        pk: "ITEM",
        sk: `ITEM#${id}`,
        id: id,
        name: name,
        description: description || "",
        createdAt: timestamp,
        updatedAt: timestamp,
    };

    const params = {
        TableName: process.env.TABLE_NAME!,
        Item: item,
    };

    await dynamoDb.put(params).promise();
}