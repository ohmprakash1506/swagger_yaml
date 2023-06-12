"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cron_job_1 = require("./cron-job");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
require("dotenv/config");
require("dotenv").config();
const swaggerJsonDocs = yamljs_1.default.load("./api.yml");
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
(0, cron_job_1.scheduleCronJobs)();
app.listen(port, () => {
    console.log(`Server is listening at port : ${port}`);
});
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerJsonDocs));
app.get("/string", (req, res) => {
    res.status(200).send("This is a string");
});
