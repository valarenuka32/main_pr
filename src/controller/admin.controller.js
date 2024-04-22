// const { adminServices } = require("../services");

// const createadmin = async (req, res) => {
//     try {
//         const reqBody = req.body;

//         const adminEX = await adminServices.getEmailById(reqBody.email);
//         if (!adminEX) {
//             throw new Error("this admin are already crated")
//         };

//         const admin = await adminServices.createadmin(reqBody);
//         res.status(200).json({
//             success: true,
//             message: "admin crated",
//             data: admin
//         });
//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             message: error.message
//         })
//     }
// };

// const adminList = async (req, res) => {
//     try {
//         const getadmin = await adminServices.adminList();
//         res.status(200).json({
//             success: true,
//             message: "admin list crated!",
//             data: getadmin
//         });

//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             message: error.message
//         })
//     }
// };

// const updateRecode = async (req, res) => {
//     try {
//         const adminId = req.params.adminId;

//         const adminEX = await adminServices.getadminById(adminId);
//         if (!adminEX) {
//             throw new Error("admin not found")
//         };

//         await adminServices.updateRecode(adminId, req.body);
//         res.status(200).json({
//             success: true,
//             message: "admin update succesfully!",
//         });
//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             message: error.message
//         })
//     }
// };

// const deleteRecode = async (req, res) => {
//     try {
//         const adminId = req.params.adminId;

//         const adminEX = await adminServices.getadminById(adminId);
//         if (!adminEX) {
//             throw new Error("admin not found")
//         };

//         await adminServices.deleteRecode(adminId);
//         res.status(200).json({
//             success: true,
//             message: "admin delete succesfully!",
//         });
//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             message: error.message
//         })
//     }
// };

// module.exports = {
//     createadmin,
//     adminList,
//     deleteRecode,
//     updateRecode
// };

