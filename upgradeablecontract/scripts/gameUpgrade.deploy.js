const { upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {

    //TODO 배포 스크립트

    const setdataContract = "0x38f0f20C2E1E8D2C72e66D2B0a322Dcd5a53E974";
    const RandomJolamanContract = "0x084eB7FF7225a19405FAcf27fDA5Bcd7e613b4F6";

    const Game = await hre.ethers.getContractFactory("Game");
    const ssu = await upgrades.deployProxy(Game, [RandomJolamanContract, setdataContract], {initializer: "initializeV"});

    console.log("setDataUpgrade deployed to : ", ssu.address);

    // 0x83eAA11F4805FF3ff74eDF58904aF8047AefaBa3
  }

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
