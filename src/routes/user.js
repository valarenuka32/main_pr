const express = require("express");
const { userController } = require("../controller");
const { userValidation } = require("../validations");
const validate = require("../middlewares/validate");

const router = express.Router();

// crate
router.post(
    "/crate-user",
    validate(userValidation.createUser),
    userController.createUser
);

// user list
router.get(
    "/user-list",
    userController.userList
);

// delete recode
router.delete(
    "/delete:/userId",
    userController.deleteRecode
);

// update recode
router.put(
    "/update:/userId",
    userController.updateRecode
);

module.exports = router;