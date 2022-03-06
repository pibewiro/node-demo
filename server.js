import express from "express";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Server started at port 3000"));
