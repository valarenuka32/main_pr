const Joi=require("joi");

const registerUser={
    body:Joi.object().keys({
        username:Joi.string().trim().required(),
        email:Joi.string().trim().required(),
        password:Joi.string().trim().required(),
        confirm_password:Joi.string().trim().required()
    })
};

const createUser={
    body:Joi.object().keys({
        username:Joi.string().trim().required(),
        email:Joi.string().trim().required(),
        password:Joi.string().trim().required(),
        confirm_password:Joi.string().trim().required()
    })
};

module.exports={
    registerUser,
    createUser
};