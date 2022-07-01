const pool = require("../../db");

const test = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM gamePoint");
  res.json(result);
};

module.exports = {
  test,
};
