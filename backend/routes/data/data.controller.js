const pool = require("../../db");

const test = async (req, res) => {
  const [result] = await pool.query(`SELECT * FROM sub`);
  res.json(result);
};

module.exports = {
  test,
};
