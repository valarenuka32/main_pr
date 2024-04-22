const mongoose = require("mongoose");
const config = require("../config/config");

const connectDB = async () => {
    mongoose
        .connect(config.mongodb.url)
        .then((data) => {
            console.log("Database connected successfully!");
        })
        .catch((error) => {
            console.log("Database connection error", error);
        })
};

module.exports = { connectDB };
