import express, { Express } from "express";
import router from "./routes";

const app: Express = express();
const PORT: any = process.env.PORT || 3000;

app.use(router);

app.listen(PORT);
