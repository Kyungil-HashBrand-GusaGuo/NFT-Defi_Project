const {
  StakeSystemContract,
  STAKING_CONTRACT_ADDRESS,
} = require("../../contracts/stakeSystem");

// account별 스테이킹된 졸라맨타입 반환함수
const getOwnedStakedJolamanType = async (req, res) => {
  const result = await StakeSystemContract.methods
    .getOwnedStakedJolamanType(req.body.account)
    .call();
  res.json(result);
};

// 쌓인 보상 조회 함수
const updateReward = async (req, res) => {
  const result = await StakeSystemContract.methods
    .updateReward(req.body.account)
    .call();
  res.json(result);
};

// 지금까지 총 받은 보상 조회 함수
const stakers = async (req, res) => {
  const result = await StakeSystemContract.methods
    .stakers(req.body.account)
    .call();
  res.json(result);
};

module.exports = {
  getOwnedStakedJolamanType,
  updateReward,
  stakers,
};