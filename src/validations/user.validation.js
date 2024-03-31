const Joi = require("joi");

const createUser = {
    body: Joi.object().keys({
        name: Joi.string().trim().required(),
        email: Joi.string().trim().required(),
        phone: Joi.string().trim().required()
    })
};

module.exports = { createUser };