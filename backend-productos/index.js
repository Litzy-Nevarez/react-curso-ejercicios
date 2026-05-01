import express from "express";
import cors from "cors";
import productsRoutes from "./routes/rutas.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", productsRoutes);

app.listen(3000, () => {
    console.log("Servidor en puerto 3000");
})