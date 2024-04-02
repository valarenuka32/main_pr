const http = require("http");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./db/dbconrection");
const config = require("./config/config");
const routes = require("./routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// database connection
connectDB();

// ejs view templet
app.set("view engine" ,"ejs");

// routes
app.use("/v1", routes);

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/crate-user",(req,res)=>{
    res.render("./crate-user")
})

// http srever
const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`server is started no ${config.port}`);
});