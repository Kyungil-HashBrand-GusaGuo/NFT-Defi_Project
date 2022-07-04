const {
    GameContract,
    adminAccount
  } = require("../../contracts/game");

  // 메모리 게임 관리자 계정 자동 처리 함수  
const MemoryGameReward = async (req, res) => {
    const result = await GameContract.methods
      .MemoryGameReward(req.body.account, req.body.result)
      .send({from:adminAccount.address, gas : 3000000});
    res.json(result);
  };

  // 행맨 게임 관리자 계정 자동 처리 함수
const HangmanGameReward = async (req, res) => {
    const result = await GameContract.methods
      .HangmanGameReward(req.body.account, req.body.wrongLetter)
      .send({from:adminAccount.address, gas : 3000000});
    res.json(result);
  };

  // 게임용 토큰 보유량 조회
const balanceOfGZLT = async(req, res) => {
    const result = await GameContract.methods
      .balanceOf(req.body.account)
      .call()
    res.json(result);
}

// 시간 초과시 랭킹권 유저들에게 자동 에어드랍 함수

const airDrop = async (req, res) => {
  const {firstaccount, secondaccount, thirdaccount, firstedition, secondedition, thirdedition} = req.body;
  const result = await GameContract.methods
    .airDrop(firstaccount, secondaccount,thirdaccount, firstedition, secondedition, thirdedition)
    .send({from:adminAccount.address, gas : 10000000});
  res.json(result);
};

  module.exports = {
    MemoryGameReward,
    HangmanGameReward,
    balanceOfGZLT,
    airDrop
  }