import express from "express";
import cors from "cors";
import productsRoutes from "./routes/rutas.js";

import { graphqlHTTP } from "express-graphql";
import { schema } from "./src/graphql/shema.js";

const app = express();

app.use(cors());
app.use(express.json());


app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql: true
}))

app.use("/api", productsRoutes);

app.listen(3000, () => {
    console.log("Servidor en puerto 3000");
})