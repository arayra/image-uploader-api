import express, { Express } from "express";
import cors from 'cors'
import router from "./routes";

const app: Express = express();
const PORT: any = process.env.PORT || 3000;

app.use(router);
app.use(cors)

app.listen(PORT);
