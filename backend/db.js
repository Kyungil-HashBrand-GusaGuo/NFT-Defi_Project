const dotenv = require("dotenv");
const mysql = require("mysql2/promise");

dotenv.config();
const { HOST, USER_ID, PASSWORD, DATABASE } = process.env;

const pool = mysql.createPool({
  host: HOST,
  user: USER_ID,
  password: PASSWORD,
  database: DATABASE,
});

module.exports = pool;
