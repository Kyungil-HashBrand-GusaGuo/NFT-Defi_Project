const { upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {

    //TODO 배포 스크립트
    const setdataContract = "0xaB75CB8f441BE3Cc486F6d36bC26A43959cB5b5d";
    const RandomJolamanContract = "0xAb8c03C195e905B9eEe38338C48944E7D5F66Eba";
    const SaleJolaman = await hre.ethers.getContractFactory("SaleJolaman");
    const ssu = await upgrades.deployProxy(SaleJolaman, [setdataContract, RandomJolamanContract], {initializer: "initialize"});

    console.log("SaleJolaman deployed to : ", ssu.address);

    // 0xff304C9ec69A67b45DD7A959A186d242c029057f
  }

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
