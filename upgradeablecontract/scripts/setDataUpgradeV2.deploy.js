const { upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {

    //배포 스크립트
    const proxyAddress = "0x346E0931e981555B18fBab6a80eC31B479C15213";
    const setDataUpgradeV2 = await hre.ethers.getContractFactory("setDataUpgradeV2");
    const ssu2 = await upgrades.upgradeProxy(proxyAddress, setDataUpgradeV2);

    console.log("setDataUpgradeV2 deployed to : ", ssu2.address);

    
  }

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
