const Student = require("../../models/student");

const getStudentDetails = async (req, res) => {
  const studentId = req.params.id;
  if (!studentId) {
    return res
      .status(404)
      .json({ success: true, message: "Student Not found" });
  } else {
    try {
      var student = await Student.findOne({ where: { id: studentId } });
    } catch (err) {
      console.error(err);
    }
    return res.status(200).json({ success: false, student });
  }
};

module.exports = { getStudentDetails };
