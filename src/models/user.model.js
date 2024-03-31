const mongoose = require("mongoose");
const config = require("../config/config");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        phone: {
            type: String,
            trim: true
        },
        image: {
            type: String,
            trim: true
        },
        status: {
            type: Boolean,
            default: true
        }

    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.image) {
                    data.image = `${config.base_url}image/${data.image}`;
                }
            }
        }
    }

);

const user = mongoose.model("user", userSchema);
module.exports = user;