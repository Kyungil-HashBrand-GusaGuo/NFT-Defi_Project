const {
  SaleContract,
  SALE_CONTRACT_ADDRESS,
} = require("../../contracts/SaleJolaman");

// 판매중인 토큰 배열 조회 함수

const getOnSaleJolaman = async (req, res) => {
  console.log('await');
  const result = await SaleContract.methods
    .getOnSaleJolamanTypeAndPrice()
    .call();
  res.json(result);
};

module.exports = {
  getOnSaleJolaman,
};
