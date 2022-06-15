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

// 판매등록 되어있지 않고 스테이킹 되어있지 않는 계좌별 졸라맨타입 배열
const getExceptSellOwnedJolamanType = async (req, res) => {
  console.log(req.body.account);
  const result = await setDataContract.methods
    .getExceptSellOwnedJolamanType(req.body.account)
    .call();
  res.json(result);
};

// contract Owner Address 조회 함수
const getOwner = async (req, res) => {
  const result = await setDataContract.methods.getOwner().call();
  res.json(result);
};

module.exports = {
  ownedTokenId,
  totalJolamanData,
  getExceptSellOwnedJolamanType,
  getOwner,
};
