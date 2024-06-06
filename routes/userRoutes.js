const { addUser } = require("../controllers/userController");

const userRouter = require("express").Router();

userRouter.post("/register", addUser);

module.exports = userRouter;