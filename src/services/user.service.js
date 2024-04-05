const { user } = require("../models");

const createUser = async (reqBody) => {
    return user.create(reqBody)
};

const userList = async (req, res) => {
    return user.find()
};

const searchUser = async (req, res) => {
    return user.find({ $or: [{ Name }, { email }, { phone }] })
};

const getUserById = async (userId) => {
    return user.findById(userId)
};

const deleteRecode = async (userId) => {
    return user.findByIdAndDelete(userId)
};

const updateRecode = async (userId, updateBody) => {
    return user.findByIdAndUpdate(userId, { $set: updateBody })
};

module.exports = { createUser, userList, searchUser, getUserById, deleteRecode, updateRecode };