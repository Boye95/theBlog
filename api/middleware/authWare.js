const jwt = require("jsonwebtoken");

// Middleware to check if user is logged in
const authWare = async (req, res, next) => {
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

module.exports = authWare;
