const { Sequelize, DataTypes, Model } = require("sequelize");
const bcrypt = require("bcrypt");

const { sequelize } = require("../bin/connection");

class Faculty extends Model {
//   isValidPassword(password) {
//     return bcrypt.compareSync(password, this.password);
//   }
}

Faculty.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    subject: {
        type: DataTypes.ENUM,
        values: ["english","maths","physics","chemistry","cs"],
        allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM,
      values: ["faculty"],
      allowNull: false,
    },
  },
  {
    sequelize, // We need to pass the connection instance
    modelName: "Faculty", // We need to choose the model name
  }
);

// sequelize.define also returns the model
console.log(Faculty === sequelize.models.Faculty); // true

module.exports = Faculty;
