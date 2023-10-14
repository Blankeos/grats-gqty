import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { graphqlServer } from "@hono/graphql-server";
import schema from "./schema/schema";
import { Query } from "./schema/Query";
import { cors } from "hono/cors";

const app = new Hono();
app.use(
  "/*",
  cors({
    origin: "*",
  })
);

app.get("/", (c) => c.text("Hello Hono!"));

app.use(
  "/graphql",
  graphqlServer({
    schema,
    rootResolver: () => new Query(),
  })
);

serve(
  {
    ...app,
    port: 7001,
  },
  (info) => {
    console.log(`Running server on http://localhost:${info.port}`);
  }
);
