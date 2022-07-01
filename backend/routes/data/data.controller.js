const pool = require("../../db");

const player = async (req, res) => {
  try {
    const { account, point } = req.body;
    const [accounts] = await pool.query(
      `SELECT account FROM gamePoint WHERE account='${account}'`
    );
    if (!accounts.length) {
      await pool.query(
        `INSERT INTO gamePoint(account, point) VALUES('${account}', ${point})`
      );
      res.json("Insert Your Account");
    } else {
      await pool.query(
        `UPDATE gamePoint SET point=point+${point} WHERE account='${account}'`
      );
      const [result] = await pool.query(
        `SELECT account, point FROM gamePoint WHERE account='${account}'`
      );
      console.log(result);
      res.json(result);
    }
  } catch (err) {
    console.error(err);
  }
};

const gameRank = async (req, res) => {
  const [result] = await pool.query(
    `SELECT account, point FROM gamePoint ORDER BY point DESC`
  );
  console.log(result);
  res.json(result);
};

module.exports = {
  player,
  gameRank,
};
