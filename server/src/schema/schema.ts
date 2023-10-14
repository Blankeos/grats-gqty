import { buildSchemaFromSDL, extractGratsSchemaAtRuntime } from "grats";
import fs from "fs";
import path from "path";

function buildSchema() {
  if (process.env.PRODUCTION) {
    const sdlPath = path.join(process.cwd(), "schema.graphql");
    // console.log(sdlPath);
    return buildSchemaFromSDL(sdlPath);
  }

  return extractGratsSchemaAtRuntime({
    emitSchemaFile: "./schema.graphql",
  });
}

const schema = buildSchema();

export default schema;
