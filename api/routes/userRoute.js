const express = require("express");

const { updateUser } = require("../controllers/userController");

const router = express.Router();
const authWare = require("../middleware/authWare");

router.patch("/:id", authWare, updateUser);

module.exports = router;
