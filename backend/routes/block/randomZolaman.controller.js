// const { caver } = require("../../contracts/randomZolaman");
const {
  RandomJolamanContract,
  MINT_CONTRACT_ADDRESS,
  caver,
  adminAccount
} = require("../../contracts/randomZolaman");

const {
  GAME_CONTRACT_ADDRESS,
} = require("../../contracts/game");

// 화이트리스트 체크
const isWhiteList = async (req, res) => {
  const result = await RandomJolamanContract.methods
    .isWhiteList(req.body.account)
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

// const BalanceKlay = async (req, res) => {
//   const result = await caver.rpc.klay.getBalance(req.body.account);
//   const balance = caver.utils.hexToNumberString(result);
//   res.json(balance);
// };

const BalanceKlay = async (req, res) => {
  const result = await caver.klay.getBalance(req.body.account);
  res.json(result);
};

// airdrop시 자동 권한 설정 함수

const setApprovedForAll = async (req, res) => {

  const result = await RandomJolamanContract.methods
    .setApprovalForAll(GAME_CONTRACT_ADDRESS, true)
    .send({from:adminAccount.address, gas : 3000000});
  res.json(result);
};

module.exports = {
  isWhiteList,
  MAX_NORMAL_TOKEN_COUNT,
  MAX_SPECIAL_TOKEN_COUNT,
  CURRENT_NORMAL_TOKEN_COUNT,
  CURRENT_SPECIAL_TOKEN_COUNT,
  BalanceKlay,
  setApprovedForAll
};
