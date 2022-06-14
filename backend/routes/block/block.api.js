// TODO : 수정 예정
// await RandomJolamanContract() 방식으로 
// .call 삭제 테스트

const {
  RandomJolamanContract,
  MINT_CONTRACT_ADDRESS,
} = require("../../contracts/randomJolaman");

const {
  setDataContract,
  DATA_CONTRACT_ADDRESS,
} = require("../../contracts/setData");

// 화이트리스트 체크
const isWhiteList = async (req, res) => {
  const result = await RandomJolamanContract()
    .isWhiteList(req.body.account)
  res.json(result);
};

// 보유 토큰 졸라맨 타입 조회
const ownedTokenId = async (req, res) => {
  console.log("확인",req.body.account);
  const result = await setDataContract()
    .getTotalOwnedTokens(req.body.account)
    .call()
  res.json(result);
};

// 전체 jolamanData 가져오는 함수
const totalJolamanData = async (req, res) => {
  const result = await setDataContract().getTotalJolamanData();
  res.json(result);
};

// normal Token 총 발행량
const MAX_NORMAL_TOKEN_COUNT = async (req, res) => {
  const result = await RandomJolamanContract()
    .MAX_NORMAL_TOKEN_COUNT()
    .call();
  res.json(result);
};

// special Token 총 발행량
const MAX_SPECIAL_TOKEN_COUNT = async (req, res) => {
  const result = await RandomJolamanContract()
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
  totalJolamanData,
  MAX_NORMAL_TOKEN_COUNT,
  MAX_SPECIAL_TOKEN_COUNT,
  CURRENT_NORMAL_TOKEN_COUNT,
  CURRENT_SPECIAL_TOKEN_COUNT,
};
