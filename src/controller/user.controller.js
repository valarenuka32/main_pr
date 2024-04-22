const { userServices } = require("../services");

// user register
const registerUser = async (req, res) => {
    try {
        const reqBody = req.body;

        let body = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            confirm_password: req.body.confirm_password
        }
        const userEx = await userServices.getUserByEmail(body.email);
        if (userEx) {
            throw new Error("user already created by this email")
        };

        const user = await userServices.registerUser(reqBody);

        if (body.password === body.confirm_password) {
            res.status(200).json({
                success: true,
                message: "User register successfully!",
                data: { user }
            });
        } else {
            res.status(404).json({ message: "password is not math" })
        };

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};
// creat user
const createUser = async (req, res) => {
    try {
        const reqBody = req.body;

        const userEX = await userServices.getUserByEmail(reqBody.email);
        if (userEX) {
            throw new Error("this user are already crated")
        };

        const user = await userServices.createUser(reqBody);
        res.status(200).json({
            success: true,
            message: "user crated",
            data: user
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

// user list
const userList = async (req, res) => {
    try {
        const getUser = await userServices.userList();
        res.status(200).json({
            success: true,
            message: "user list crated!",
            data: getUser
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

// update user
const updateRecode = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userEX = await userServices.getuserById(userId);
        if (!userEX) {
            throw new Error("user not found")
        };

        await userServices.updateRecode(userId, req.body);
        res.status(200).json({
            success: true,
            message: "user update succesfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

// delete user
const deleteRecode = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userEX = await userServices.getUserById(userId);
        if (!userEX) {
            throw new Error("user not found")
        };

        await userServices.deleteRecode(userId);
        res.status(200).json({
            success: true,
            message: "user delete succesfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

module.exports = {
    registerUser,
    createUser,
    userList,
    deleteRecode,
    updateRecode
};

