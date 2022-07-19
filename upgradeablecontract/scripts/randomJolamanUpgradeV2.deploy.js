const { upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {

    //TODO 배포 스크립트
    const proxyAddress = "0x9fDfCBe35F82d02126C021520C250c39A1557910";
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
