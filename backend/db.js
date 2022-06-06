const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "34.64.186.161",
  user: "root",
  password: "5962",
  database: "Defi",
});

module.exports = pool;
