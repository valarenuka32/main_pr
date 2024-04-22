const express = require("express");
const { userController } = require("../controller");
const { userValidation } = require("../validation");
const validate = require("../middleware/validate");

const router = express.Router();

// create
router.post(
    "/register",
    validate(userValidation.registerUser),
    userController.registerUser
);
router.post(
    "/create-user",
    userController.createUser
);
// list
router.get(
    "/list",
    userController.userList
);
// update
router.put(
    "/update-recode/:userId",
    userController.updateRecode
);
// delete
router.delete(
    "/delete-recode/:userId",
    userController.deleteRecode
);

module.exports = router;