const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Middleware to check if user is logged in
exports.authWare = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ errors: [{ msg: "Unauthorized" }] });
  }

  try {
    const token = authorization.split(" ")[1];
    const customAuth = token.length < 500;

    let decodedData;

    if (token && customAuth) {
      decodedData = jwt.verify(token, process.env.SECRET);
      req.userId = decodedData?.id;
    //   console.log(req.userId)
    } else {
        decodedData = jwt.decode(token);
        req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    res.status(404).json({
        status: "fail",
        message: error,
    })
  }
};

// middleware for admin role
exports.adminWare = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    if (user.role === "admin") {
      next();
    } else {
      res.status(400).json({
        status: "fail",
        message: "You are not authorized to perform this action",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
}