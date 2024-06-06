const { addUser, getUsers } = require("../controllers/userController");
const { login } = require("../controllers/userController");
const userRouter = require("express").Router();

userRouter.post("/register", addUser);
userRouter.post("/login",   login);
userRouter.get("/all", auth,getUsers);

module.exports = userRouter;