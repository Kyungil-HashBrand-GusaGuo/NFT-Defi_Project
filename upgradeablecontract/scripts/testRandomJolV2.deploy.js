const { upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {

    //TODO 배포 스크립트
    const proxyAddress = "0x0A3061Db3334ae9B7a19d28cA8DfE22A12FF3cA5";
    const RandomJolamanV2 = await hre.ethers.getContractFactory("RandomJolamanV2");
    const ssu2 = await upgrades.upgradeProxy(proxyAddress, RandomJolamanV2);

    console.log("RandomJolamanV2 deployed to : ", ssu2.address);

    
  }

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
