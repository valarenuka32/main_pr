const mongoose = require("mongoose");

const connectDB = async () => {
    mongoose
        .connect('mongodb+srv://valarenuka32:Fuj8dY9KWSleV6Ek@renuka.fccm3zh.mongodb.net/?retryWrites=true&w=majority')
        .then((data) => {
            console.log("database connect successfully")
        })
        .catch((error) => {
            console.log('error', error);
        })
};

module.exports = {connectDB};