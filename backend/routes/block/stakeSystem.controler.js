const {
  stakeSystemContract,
  STAKING_CONTRACT_ADDRESS,
} = require("../../contracts/stakeSystem");

// account별 스테이킹된 졸라맨타입 반환함수
const getOwnedStakedJolamanType = async (req, res) => {
  const result = await stakeSystemContract.methods
    .getOwnedStakedJolamanType(req.body.account)
    .call();
  res.json(result);
};

// 쌓인 보상 조회 함수
const updateReward = async (req, res) => {
  const result = await stakeSystemContract.methods
    .updateReward(req.body.account)
    .call();
  res.json(result);
};

// 지금까지 총 받은 보상 조회 함수
const stakers = async (req, res) => {
  const result = await stakeSystemContract.methods
    .stakers(req.body.account)
    .call();
  res.json(result);
};

// 내 보유 ZLT 조회 함수 
const balanceOf = async (req, res) => {
  const result = await stakeSystemContract.methods
    .balanceOf(req.body.account)
    .call();
  res.json(result);
};

module.exports = {
  getOwnedStakedJolamanType,
  updateReward,
  stakers,
  balanceOf,
};
