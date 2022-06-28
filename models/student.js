const { Sequelize, DataTypes, Model } = require("sequelize");
const bcrypt = require("bcrypt");

const { sequelize } = require("../bin/connection");

class Student extends Model {
  //   isValidPassword(password) {
  //     return bcrypt.compareSync(password, this.password);
  //   }
}

Student.init(
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM,
      values: ["student"],
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    rollNo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    admNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    standard: {
      type: DataTypes.ENUM,
      values: ["9", "10", "11", "12"],
      allowNull: false,
    },
    maths: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cs: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    english: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    physics: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    chemistry: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize, // We need to pass the connection instance
    modelName: "Student", // We need to choose the model name
  }
);

// sequelize.define also returns the model
console.log(Student === sequelize.models.Student); // true

module.exports = Student;
