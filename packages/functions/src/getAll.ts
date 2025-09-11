import {DynamoDB} from "aws-sdk";

const dynamoDb = new DynamoDB.DocumentClient();

export async function handler() {
    try {
        const params = {
            TableName: process.env.TABLE_NAME!,
        };

        const result = await dynamoDb.scan(params).promise();

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "AccessControlAllow-Origins": "*",
            },
            body: JSON.stringify({
                success: true,
                data: result.Items,
                count: result.Count,
            }),
        };
    } catch (error: any) {
        console.error("DynamoDB Error:", error);

        return {
            statusCode: 500,
            headers: {
                "Content-Type": "application/json",
                "AccessControlAllow-Origins": "*",
            },
            body: JSON.stringify({
                success: false,
                data: error.message,
            }),
        };
    }
}