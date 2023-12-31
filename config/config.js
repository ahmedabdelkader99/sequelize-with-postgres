require("dotenv").config();
console.log(process.env.DB_USER);

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.PASS,
    database: process.env.NAME,
    host: "'localhost'",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
