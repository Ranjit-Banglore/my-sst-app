import {StackContext, Api, StaticSite} from "sst/constructs";

export function API({stack}: StackContext) {

// create API
    const api = new Api(stack, "Api", {
        routes: {
            "GET /hello": "packages/functions/src/lambda.handler",
        },
        cors:{
            allowOrigins: ["*"],
        }
    });

    const site = new StaticSite(stack,"ReactSite",{
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
    });
}
