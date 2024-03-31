const { userService } = require("../services");

// user create
const createUser = async (req, res) => {
    try {
        const reqBody = req.body;

        const user = await userService.createUser(reqBody);
        res.status(200).json({
            success: true,
            message: "user crate successfully...",
            data: user
        })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// user list

const userList = async (req, res) => {
    try {
        const getList = await userService.getList();
        res.status(200).json({
            success: true,
            message: "user list success",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};
// user delete
const deleteRecode = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userEx = await userService.getUserById(userId);
        if (!userEx) {
            throw new Error("user not found")
        }

        await userService.deleteRecode(userId, req.body);
        res.status(200).json({
            success: true,
            message: "user details delete success"
        })
    } catch (error) {
        res.status(400).json({ success: true, message: error.message })
    }
};

// user update

const updateRecode = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userEx = await userService.getUserById(userId);
        if (!userEx) {
            throw new Error("user not found")
        }

        await userService.updateRecode(userId, req.body);
        res.status(200).json({
            success: true,
            message: "user details update successfully"
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = { createUser, userList, deleteRecode, updateRecode };

