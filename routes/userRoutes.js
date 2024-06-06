const {
    addUser,
    login,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
  } = require("../controllers/userController");
  const auth = require("../middlewares/auth");
  
  const userRouter = require("express").Router();
  
  userRouter.post("/register", addUser);
  userRouter.post("/login", login);
  userRouter.get("/all", auth, getUsers);
  userRouter.get("/:id", auth, getUserById);
  userRouter.put("/:id/edit", auth, updateUser);
  userRouter.delete("/:id/destroy", auth, deleteUser);
  
  module.exports = userRouter;