const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        password: {
            type: String
            // default: 0
        },
        confirm_password: {
            type: String
            // default: 0
        },
        is_active: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const admin = mongoose.model("admin", adminSchema);
module.exports = admin;