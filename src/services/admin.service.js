// const { admin } = require("../models");


// const createadmin = async (reqbody) => {
//     return admin.create(reqbody);
// };

// const adminList = (req, res) => {
//     return admin.find()
//         .populate("admin");
// };

// const deleteRecode = async (adminId) => {
//     return admin.findByIdAndDelete(adminId);
// };

// const updateRecode = async (adminId, updateBody) => {
//     return admin.findByIdAndUpdate(adminId, { $set: updateBody });
// };

// const getadminById = async (adminId) => {
//     return admin.findById(adminId);
// };
// module.exports = {
//     createadmin,
//     adminList,
//     deleteRecode,
//     updateRecode,
//     getadminById
// };