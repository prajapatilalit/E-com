import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import userRoutes from "./routers/usersRoute.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use("/", userRoutes);

app.get("/", (req, res) => res.send("Hello from Server"));
app.all("*", (req, res) => res.send("Router doesn't match"));

app.listen(port, () =>
  console.log(`server listening on port: http//localhost:${port}`)
);
