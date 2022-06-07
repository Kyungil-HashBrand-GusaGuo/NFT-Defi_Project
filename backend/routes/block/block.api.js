const {
  RandomJolamanContract,
  MINT_CONTRACT_ADDRESS,
} = require("../../contracts/jolamanContract");

const isWhiteList = async (req, res) => {
  const result = await RandomJolamanContract.methods
    .isWhiteList(req.body.account)
    .call();
  res.json(result);
};

// 보유 토큰 졸라맨 타입 조회
const ownedTokenId = async (req, res) => {
  console.log(req.body.account);
  const result = await RandomJolamanContract.methods
    .getTotalOwnedTokens(req.body.account)
    .call();
  res.json(result);
};
// 보유 klay 조회
const balanceKlay = async (req, res) => {
  const result = await RandomJolamanContract.methods
    .getBalance(req.body.account)
    .call();
  res.json(result);
};

// 전체 jolamanData 가져오는 함수
const totalJolamanData = async (req, res) => {
  const result = await RandomJolamanContract.methods
    .getTotalJolamanData(0)
    .call();
  res.json(result);
};

// normal Token 총 발행량
const MAX_NORMAL_TOKEN_COUNT = async (req, res) => {
  const result = await RandomJolamanContract.methods
    .MAX_NORMAL_TOKEN_COUNT()
    .call();
  res.json(result);
};

// special Token 총 발행량
const MAX_SPECIAL_TOKEN_COUNT = async (req, res) => {
  const result = await RandomJolamanContract.methods
    .MAX_SPECIAL_TOKEN_COUNT()
    .call();
  res.json(result);
};

// 현재 normal Token 발행된 갯수
const CURRENT_NORMAL_TOKEN_COUNT = async (req, res) => {
  const result = await RandomJolamanContract.methods
    ._normalTokenIdCount()
    .call();
  res.json(result);
};

// 현재 special Token 발행된 갯수
const CURRENT_SPECIAL_TOKEN_COUNT = async (req, res) => {
  const result = await RandomJolamanContract.methods
    ._specialTokenIdCount()
    .call();
  res.json(result);
};

module.exports = {
  isWhiteList,
  ownedTokenId,
  balanceKlay,
  totalJolamanData,
  MAX_NORMAL_TOKEN_COUNT,
  MAX_SPECIAL_TOKEN_COUNT,
  CURRENT_NORMAL_TOKEN_COUNT,
  CURRENT_SPECIAL_TOKEN_COUNT,
};
