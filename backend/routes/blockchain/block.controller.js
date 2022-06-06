const { RandomJolamanContract, MINT_CONTRACT_ADDRESS } = require("../../jolamanContract.js");

RandomJolamanContract.methods.MAX_NORMAL_TOKEN_COUNT().call().then(e => console.log(e))
// await를 안썻으므로 .then() method 사용한것

const test = async (req, res) => {
  try {
    console.log(req.query.name);
    res.send("test");
  } catch (e) {
    console.error(e);
  }
};
const test2 = async (req, res) => {
  try {
    console.log(req.body.data);
    res.send("test");
  } catch (e) {
    console.error(e);
  }
};
const isWhiteList = async (req, res) => {
  let account = res.body.account;
  try {
    const response = await RandomJolamanContract.methods.isWhiteList(account).call();
    res.json(response)
    // res.send("req.body.data");
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  test,
  test2,
  isWhiteList
};
