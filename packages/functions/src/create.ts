import {DynamoDB} from "aws-sdk";


const dynamoDb = new DynamoDB.DocumentClient();

export async function handler(event: any) {

    try {
        const body = JSON.parse(event.body);
        const {name, description} = body;

        if (!name) {
            return {
                statusCode: 400,
                headers: {
                    "content-type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({error: "Name is required"}),
            };
        }

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

        return {
            statusCode: 201,
            headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                success: true,
                data: item,
            }),
        };


    } catch (error: any) {
        console.log("Create error:", error);
        return {
            statusCode: 500,
            headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                success: false,
                error: error.message,
            }),
        };
    }

}