const Faculty = require("../../models/faculty");
const Student = require("../../models/student");

// ! Student marks update

const editStudentMarks = async (req, res) => {
  const studentId = req.params.id;
  const { maths,english,cs,physics,chemistry } =
    req.body;
  if (!studentId) {
    return res
      .status(404)
      .json({ success: false, message: `Student with ID:${userId} not found` });
  } else {
    try {
      var student = await Student.update(
        {
          maths: maths,
          english: parseFloat(english),
          cs: parseFloat(cs),
          physics: parseFloat(physics),
          chemistry: parseFloat(chemistry),
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
module.exports = { editStudentMarks };
