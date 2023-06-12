import express from "express";
import { scheduleCronJobs } from "./cron-job";
import SwaggerUI from "swagger-ui-express";
import YAML from "yamljs";
import "dotenv/config";

require("dotenv").config();
const swaggerJsonDocs = YAML.load("./api.yml");
const app = express();
const port = process.env.PORT || 8000;

scheduleCronJobs();

app.listen(port, () => {
  console.log(`Server is listening at port : ${port}`);
});

app.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(swaggerJsonDocs));

app.get("/string", (req, res) => {
  res.status(200).send("This is a string");
});
