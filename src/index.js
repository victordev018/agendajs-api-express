import express from "express";
import cors from "cors";
import router from "./routes.js";

const app = express();

app.use(cors());
app.use(router);

app.listen(3001, ()=>{
    console.log("servidor iniciado na porta 3001...");
})