const express = require("express");
const { adminController } = require("../controller");
const { adminValidation } = require("../validation");
const validate = require("../middleware/validate");

const router = express.Router();

router.post(
    "/register",
    validate(adminValidation.registerAdmin),
    adminController.registerAdmin
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

module.exports = router;