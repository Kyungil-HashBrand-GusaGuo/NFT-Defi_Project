const {
  setDataContract,
  DATA_CONTRACT_ADDRESS,
} = require("../../contracts/setData");

// 보유 토큰 졸라맨 타입 조회
const ownedTokenId = async (req, res) => {
  console.log(req.body.account);
  const result = await setDataContract.methods
    .getTotalOwnedTokens(req.body.account)
    .call();
  res.json(result);
};

// 전체 jolamanData 가져오는 함수
const totalJolamanData = async (req, res) => {
  const result = await setDataContract.methods.getTotalJolamanData().call();
  res.json(result);
};

//
const getExceptSellOwnedJolamanType = async (req, res) => {
  console.log(req.body.account);
  const result = await setDataContract.methods
    .getExceptSellOwnedJolamanType(req.body.account)
    .call();
  res.json(result);
};

module.exports = {
  ownedTokenId,
  totalJolamanData,
  getExceptSellOwnedJolamanType,
};
