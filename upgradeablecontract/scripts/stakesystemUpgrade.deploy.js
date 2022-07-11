const { upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {

    //TODO 배포 스크립트 
    const setdataContract = "0x38f0f20C2E1E8D2C72e66D2B0a322Dcd5a53E974";
    const RandomJolamanContract = "0x084eB7FF7225a19405FAcf27fDA5Bcd7e613b4F6";

    const StakingSystem = await hre.ethers.getContractFactory("StakingSystem");
    const ssu = await upgrades.deployProxy(StakingSystem, [RandomJolamanContract, setdataContract], {initializer: "initializeV"});

    console.log("StakingSystem deployed to : ", ssu.address);

    // 0xf1e28b855278980175D34a745fb8De646D21903F
  }

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
