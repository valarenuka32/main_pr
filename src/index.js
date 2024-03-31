require('dotenv').config();
const http = require("http");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./db/dbconrection");
const routes = require("./routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// database connection
connectDB();

// routes
app.use("/v1", routes);

// http srever
http.createServer(app).listen(process.env.PORT, () => {
    console.log("server is started...");
});