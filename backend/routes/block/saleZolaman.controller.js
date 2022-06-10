const {
  SaleContract,
  SALE_CONTRACT_ADDRESS,
} = require("../../contracts/SaleJolaman");

// 졸라맨 타입 입력 판매 중 여부 확인  리턴값 bool
const SellingJol = async (req, res) => {
  const result = await SaleContract.methods
    .SellingJol(req.body.zolamanType)
    .call();
  res.json(result);
};

// 판매중인 토큰 배열 조회 함수
const getOnSaleJolamanTypeAndPrice = async (req, res) => {
  const result = await SaleContract.methods
    .getOnSaleJolamanTypeAndPrice()
    .call();
  res.json(result);
};

module.exports = {
  SellingJol,
  getOnSaleJolamanTypeAndPrice,
};
