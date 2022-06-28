const { Sequelize } = require("sequelize");
const config = require("./config");

let sequelize;
if (config.db.postgres.url.length > 0) {
  sequelize = new Sequelize(config.db.postgres.url);
} else {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: __dirname + "/.database.sqlite",
  });
}

module.exports = { sequelize };