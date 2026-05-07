import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { schema } from "./schema.js";
import { root } from "./resolvers.js";

const app = express();

app.use(cors());

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("Servidor en http://localhost:4000/graphql");
})