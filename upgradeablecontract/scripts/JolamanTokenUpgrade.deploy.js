const { upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {

    //TODO 배포 스크립트

    const JolamanToken = await hre.ethers.getContractFactory("JolamanToken");
    const ssu = await upgrades.deployProxy(JolamanToken, {initializer: "initialize"});

    console.log("JolamanToken deployed to : ", ssu.address);

  }

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
