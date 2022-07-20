const { upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {

    //TODO 배포 스크립트

    const setdataContract = "0xaB75CB8f441BE3Cc486F6d36bC26A43959cB5b5d";
    const RandomJolamanContract = "0xAb8c03C195e905B9eEe38338C48944E7D5F66Eba";

    const Game = await hre.ethers.getContractFactory("Game");
    const ssu = await upgrades.deployProxy(Game, [RandomJolamanContract, setdataContract], {initializer: "initializeV"});

    console.log("setDataUpgrade deployed to : ", ssu.address);

    // 0xcE685cb1AD8816CbbA465ba086203C6D5b054565
  }

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
