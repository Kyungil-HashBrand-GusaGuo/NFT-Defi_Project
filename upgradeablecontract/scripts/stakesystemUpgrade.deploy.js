const { upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {

    //TODO 배포 스크립트 
    const setdataContract = "0xaB75CB8f441BE3Cc486F6d36bC26A43959cB5b5d";
    const RandomJolamanContract = "0xAb8c03C195e905B9eEe38338C48944E7D5F66Eba";

    const StakingSystem = await hre.ethers.getContractFactory("StakingSystem");
    const ssu = await upgrades.deployProxy(StakingSystem, [RandomJolamanContract, setdataContract], {initializer: "initializeV"});

    console.log("StakingSystem deployed to : ", ssu.address);

    // 0x980C261d5B08221227f5e95185EaB2563B1AC120
  }

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
