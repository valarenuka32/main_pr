const express = require("express");
const fs = require("fs");
const http = require("http");
const bodyParser = require("body-parser");
const config = require("./config/config");
const { connectDB } = require("./db/dbconnection");
const routes = require("./routes");

const app = express();

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// namespace
app.use("/v1", routes);

// create a server
const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`server is started port no is ${config.port}`);
});