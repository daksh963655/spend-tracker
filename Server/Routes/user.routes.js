const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUser,
  getUserById,
} = require("../Controller/user.controller.js");
const { verifyJWT } = require("../Middleware/auth.midleware.js");

const Router = express.Router();

Router.route("/register").post(registerUser);
Router.route("/login").post(loginUser);
Router.route("/allUser").get( getAllUser);
Router.route("/:id").get(verifyJWT , getUserById);

module.exports = Router;
