const express = require("express");
const { SignUp, SignIn, SignOut } = require("../controller/userController");

const {
  getUserDetail,
  getAllUserDetails,
  updateUserDetail,
  deleteUserDetail,
  deleteAllUserDetails,
  createUserDetail,
} = require("../controller/user_detailsController");

const router = express.Router();

router.post("/login", SignIn);
router.post("/signup", SignUp);
router.post("/logout", SignOut);

router.post("/create", createUserDetail);
router.get("/user/:id", getUserDetail);
router.get("/users", getAllUserDetails);
router.put("/update/:id", updateUserDetail);
router.delete("/delete/:id", deleteUserDetail);
router.delete("/delete", deleteAllUserDetails);

module.exports = router;
