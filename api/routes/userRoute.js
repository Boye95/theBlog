const express = require("express");

const { getAllUsers, updateUser, deleteUser } = require("../controllers/userController");

const router = express.Router();
const { authWare, adminWare } = require("../middleware/authWare");

router.get("/", authWare, adminWare, getAllUsers);
router.patch("/:id", authWare, updateUser);
router.delete("/:id", authWare, deleteUser);

module.exports = router;
