const { admin } = require("../models");

const createadmin = async (reqbody) => {
    return admin.create(reqbody);
};

const registerAdmin = async (reqBody) => {
    return admin.create(reqBody);
};

const getAdminByEmail = async (email) => {
    return admin.findOne({ email });
};
const findAdmin = async (email) => {
    return admin.findOne({ email });
};

const adminList = (req, res) => {
    return admin.find();
};

const deleteRecode = async (adminId) => {
    return admin.findByIdAndDelete(adminId);
};

const updateRecode = async (adminId, updateBody) => {
    return admin.findByIdAndUpdate(adminId, { $set: updateBody });
};

const getadminById = async (adminId) => {
    return admin.findById(adminId);
};
module.exports = {
    registerAdmin,
    getAdminByEmail,
    findAdmin,
    createadmin,
    adminList,
    deleteRecode,
    updateRecode,
    getadminById
};