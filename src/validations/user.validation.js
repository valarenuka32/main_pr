const Joi = require("joi");

const createUser = {
    body: Joi.object().keys({
        name: Joi.string().trim().required(),
        email: Joi.string().trim().required(),
        phone: Joi.number().required()
    })
};

module.exports = { createUser };