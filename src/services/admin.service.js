const { admin } = require("../models");

const createadmin = async (reqbody) => {
  return admin.create(reqbody);
};

const registerAdmin = async (reqBody) => {
  return admin.create(reqBody);
};

const getEmailById = async (email) => {
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

// const findadmin=async()=>{
//   return admin.findOne()
// }
// const search = async () => {
//   return admin.find({
//     $or: [
//       { username: { $regex: req.params.key } },
//       { email: { $regex: req.params.key } },
//     ],
//   });
// };
module.exports = {
  registerAdmin,
  getEmailById,
  findAdmin,
  createadmin,
  adminList,
  deleteRecode,
  updateRecode,
  getadminById
  // findadmin
};
