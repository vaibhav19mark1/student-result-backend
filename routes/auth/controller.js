const Admin = require("../../models/admin");
const Faculty = require("../../models/faculty");
const Student = require("../../models/student");

const login = async (req, res) => {
  const { userId, password } = req.body;
  let splitted = userId.split("");
  if (splitted[0] === "A") {
    try {
      var user = await Admin.findOne({
        where: { userId: userId },
      });
    } catch (err) {
      console.error(err);
    }
  } else if (splitted[0] === "F") {
    var user = await Faculty.findOne({
      where: { userId: userId },
    });
  } else if (splitted[0] === "S") {
    try {
      var user = await Student.findOne({
        where: { userId: userId, password: password },
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    return res.status(400).json({ message: "Invalid details" });
  }
  if (user.password === password) {
    return res.status(200).json({ success: true, user });
  }
};
// ! create admin
const createAdmins = async (req, res) => {
  const { firstName, lastName, password, role } = req.body;
  try {
    var admin = await Admin.create({
      firstName: firstName,
      lastName: lastName,
      userId: "AD01",
      password: password,
      role: role,
    });
  } catch (err) {
    console.error(err);
  }
  return res.status(200).json({ success: true, admin });
};
// ! create Faculties
const createFaculties = async (req, res) => {
  const { firstName, lastName, userId, password, subject, role } =
    req.body;
  try {
    var faculty = await Faculty.create({
      firstName: firstName,
      lastName: lastName,
      password: password,
      userId: userId,
      role: role,
      subject: subject,
    });
  } catch (err) {
    console.error(err);
  }
  return res.status(200).json({ success: true, faculty });
};
// ! create a new instance of student in a student DB
const createStudents = async (req, res) => {
  const { firstName, lastName, password, userId, role, standard, admNo, rollNo } =
    req.body;
  try {
    var student = await Student.create({
      firstName: firstName,
      lastName: lastName,
      password: password,
      role: role,
      admNo: admNo,
      userId: userId,
      standard: standard,
      rollNo: rollNo,
      maths: "",
      physics: "",
      english: "",
      chemistry: "",
      cs: ""
    });
  } catch (err) {
    console.error(err);
  }
  return res.status(200).json({ success: true, student });
};

// ! Faculty Details update
const editFacultyDetails = async (req, res) => {
  const facultyId = req.params.id;
  const { firstName, lastName, empId, password, standard, subject, role } =
    req.body;
  if (!facultyId) {
    return res
      .status(404)
      .json({ success: true, message: "Faculty Not found" });
  } else {
    try {
      var faculty = await Faculty.update(
        {
          firstName: firstName,
          lastName: lastName,
          password: password,
          empId: empId,
          role: role,
          subject: subject,
          standard: standard,
        },
        { where: { id: facultyId } }
      );
    } catch (err) {
      console.error(err);
    }
    return res.status(200).json({ success: true, faculty });
  }
};
// ! Student Details update route
const editStudentDetails = async (req, res) => {
  const studentId = req.params.id;
  const { firstName, lastName, password, role, standard, admNo, rollNo } =
    req.body;
  if (!studentId) {
    return res
      .status(404)
      .json({ success: false, message: `Student with ID:${userId} not found` });
  } else {
    try {
      var student = await Student.update(
        {
          firstName: firstName,
          lastName: lastName,
          password: password,
          role: role,
          standard: standard,
          admNo: admNo,
          rollNo: rollNo
        },
        {
          where: {
            id: studentId,
          },
        }
      );
    } catch (err) {
      console.error(err);
    }
    return res.status(200).json({ success: true, student });
  }
};

//! get all faculties:
const getAllFaculties = async (req, res) => {
  try {
    var faculties = await Faculty.findAll({});
  } catch (error) {
    console.error(err);
  }
  return res.status(200).json({ success: true, faculties });
};

//! get all students:
const getAllStudents = async (req, res) => {
  try {
    var students = await Student.findAll({});
  } catch (error) {
    console.error(err);
  }
  return res.status(200).json({ success: true, students });
};

module.exports = {
  login,
  createAdmins,
  createStudents,
  createFaculties,
  editStudentDetails,
  editFacultyDetails,
  getAllFaculties,
  getAllStudents
};