import { createRequire as topLevelCreateRequire } from 'module';
const require = topLevelCreateRequire(import.meta.url);
import { fileURLToPath as topLevelFileUrlToPath, URL as topLevelURL } from "url"
const __dirname = topLevelFileUrlToPath(new topLevelURL(".", import.meta.url))

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// packages/functions/src/lambda.ts
var handler = /* @__PURE__ */ __name(async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Hello from SST!",
      path: event.rawPath
    })
  };
}, "handler");
export {
  handler
};
//# sourceMappingURL=lambda.mjs.map
