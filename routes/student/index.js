var express = require("express");
// const {authMiddleware} = require("./middleware");
const passport = require("passport");
const jwt = require("jsonwebtoken");
var router = express.Router();

const { getStudentDetails } = require("./controller");
const config = require("../../bin/config");

router.get("/:id", getStudentDetails);
// router.post("/signup", signup);
// router.put("/user/:id", authMiddleware, editUser);
// router.get("/admin", authMiddleware, getUsers);
// router.delete("/user/:id", authMiddleware, deleteUser);

module.exports = router;
