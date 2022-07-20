const { upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {

    //TODO 배포 스크립트

    const setData = await hre.ethers.getContractFactory("setData");
    const ssu = await upgrades.deployProxy(setData, [], { initializer: "initialize"});

    console.log("setData deployed to : ", ssu.address);

    //0xaB75CB8f441BE3Cc486F6d36bC26A43959cB5b5d

  }

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
