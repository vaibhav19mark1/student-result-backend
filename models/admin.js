const { Sequelize, DataTypes, Model } = require("sequelize");
const bcrypt = require("bcrypt");

const { sequelize } = require("../bin/connection");

class Admin extends Model {}

Admin.init(
  {
    // Model attributes are defined here
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
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM,
      values: ["admin"],
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Admin", // We need to choose the model name
  }
);

// sequelize.define also returns the model
console.log(Admin === sequelize.models.Admin); // true

module.exports = Admin;
