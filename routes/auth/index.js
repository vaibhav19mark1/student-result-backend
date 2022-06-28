var express = require("express");
const { authMiddleware } = require("./middleware");
const passport = require("passport");
const jwt = require("jsonwebtoken");
var router = express.Router();

const {
  login,
  createFaculties,
  createStudents,
  editStudentDetails,
  editFacultyDetails,
  createAdmins,
  getAllFaculties,
  getAllStudents
} = require("./controller");
const config = require("../../bin/config");

router.post("/login", login);
router.post("/faculty", createFaculties);
router.post("/admin", createAdmins);
router.post("/student", createStudents);
router.put("/student/:id", editStudentDetails);
router.put("/faculty/:id", editFacultyDetails);
router.get("/faculty", getAllFaculties);
router.get("/student", getAllStudents);


module.exports = router;
