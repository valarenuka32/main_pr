const Joi = require("joi");
const dotenv = require("dotenv");

dotenv.config();

const envVarsSchema = Joi.object({
    PORT: Joi.number().default(2000),
    MONGODB_URL: Joi.string().trim().description("mongoodb url"),
    BASE_URL: Joi.string().trim().description("base url")
}).unknown();

const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env)

if (error) {
    console.log("config error", error);
}

module.exports = {
    port: envVars.PORT,
    mongodb: {
        url: envVars.MONGODB_URL,
        // options: {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // }
    },
    base_url: envVars.BASE_URL
};