const express = require("express");
const userValidate = require("../middleware/signIn.middleware.js");
const SignInService = require("../services/signIn.service");
const userRouter = express.Router();

userRouter.route("/").post(userValidate, async (req, res, next) => {
  const data = req.body;

  try {
    await SignInService.addUser(data);
    res.status(200).json({ message: "Signed in successfully", status: 200 });
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
