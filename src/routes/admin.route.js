const express = require("express");
const { adminController } = require("../controller");
const { adminValidation } = require("../validation");
const validate = require("../middleware/validate");
const { autheticate } = require("../middleware/auth");

const router = express.Router();

router.post(
    "/register",
    validate(adminValidation.registerAdmin),
    adminController.registerAdmin
);

router.post(
    "/login",
    autheticate,
    adminController.loginAdmin
);

// create
router.post(
    "/create-admin",
    adminController.createadmin
);
// list
router.get(
    "/list",
    adminController.adminList
);
// update
router.put(
    "/update-recode/:adminId",
    adminController.updateRecode
);
// delete
router.delete(
    "/delete-recode/:adminId",
    adminController.deleteRecode
);

router.get('/search', adminController.search);

module.exports = router;