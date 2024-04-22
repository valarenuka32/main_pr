const { user } = require("../models");


const registerUser = async (body) => {
    return user.create(body);
};
const createUser = async (reqbody) => {
    return user.create(reqbody);
};

const userList = (req, res) => {
    return user.find()
};

const getUserByEmail = async (email) => {
    return user.findOne({email});
};

const deleteRecode = async (userId) => {
    return user.findByIdAndDelete(userId);
};

const updateRecode = async (userId, updateBody) => {
    return user.findByIdAndUpdate(userId, { $set: updateBody });
};

const getuserById = async (userId) => {
    return user.findById(userId);
};

module.exports = {
    registerUser,
    createUser,
    userList,
    deleteRecode,
    updateRecode,
    getuserById,
    getUserByEmail
};