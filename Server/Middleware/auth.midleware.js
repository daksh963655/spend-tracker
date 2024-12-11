const ApiError = require("../Utils/ApiError");
const AsyncHandler = require("../Utils/AsyncHandler");
const jwt = require("jsonwebtoken");
const User = require("../model/user.model.js");

const verifyJWT = AsyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log(decodedToken);

    const user = await User.findById(decodedToken._id).select(
      "-password -refreshToken"
    );
    console.log(user);

    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error.message || "Invalid access token");
  }
});

module.exports = { verifyJWT };
