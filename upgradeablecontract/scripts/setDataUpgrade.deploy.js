const { upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {

    //TODO 배포 스크립트

    const setData = await hre.ethers.getContractFactory("setData");
    const ssu = await upgrades.deployProxy(setData, [], { initializer: "initialize"});

    console.log("setData deployed to : ", ssu.address);

    //0x38f0f20C2E1E8D2C72e66D2B0a322Dcd5a53E974

  }

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
