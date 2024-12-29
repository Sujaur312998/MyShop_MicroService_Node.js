import express from "express";
import catalogRouter from "./api/catalog.routes";

const PORT= process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use('/', catalogRouter)

export default app