const express = require("express");
const { userController } = require("../controller");
const { userValidation } = require("../validations");
const validate = require("../middlewares/validate");
const { upload } = require("../middlewares/upload");

const router = express.Router();

// crate
router.post(
    "/crate-user",
    upload.single("image"),
    validate(userValidation.createUser),
    userController.createUser
);

// user list
router.get(
    "/user-list",
    userController.userList
);

// search
router.get(
    "/search-user",
    userController.userSearch
);
// delete recode
router.delete(
    "/delete/:userId",
    userController.deleteRecode
);

// update recode
router.put(
    "/update/:userId",
    userController.updateRecode
);

module.exports = router;