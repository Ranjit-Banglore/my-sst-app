import {StackContext, Api, StaticSite, Table} from "sst/constructs";

export function API({stack}: StackContext) {

// Create DynamoDB table
    const table = new Table(stack, "Items", {
        fields: {
            pk: "string", // Partition key
            sk: "string", // Sort key
            id: "string", // Item ID
            name: "string",
            description: "string",
            createdAt: "number",
            updatedAt: "number",
        },
        primaryIndex: {partitionKey: "pk", sortKey: "sk"},
        globalIndexes: {
            idIndex: {partitionKey: "id"},
            createdAtIndex: {partitionKey: "pk", sortKey: "createdAt"},
        },
    });


// create API
    const api = new Api(stack, "Api", {

        defaults: {
            function: {
                bind: [table],
                environment: {
                    TABLE_NAME: table.tableName,
                },
            },
        },

        routes: {
            "GET /items": "packages/functions/src/getAll.handler",
            "GET /items/{id}": "packages/functions/src/getById.handler",
            "POST /item" : "packages/functions/src/create.handler",
        },
        cors: {
            allowOrigins: ["*"],
        }
    });

    const site = new StaticSite(stack, "ReactSite", {
        path: "packages/frontend",
        buildOutput: "build",
        buildCommand: "npm run build",
        dev: {
            deploy: true,
            url: "http://localhost:3000",
        },
        environment: {
            REACT_APP_API_URL: api.url,
            REACT_APP_STAGE: stack.stage,
        },
    });
    console.log("Site properties:", Object.keys(site));
    stack.addOutputs({
        ApiEndpoint: api.url,
        SiteUrl: site.url,
        TableName: table.tableName
    });

    return {api, site, table};
}
