const { upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {

    //TODO 배포 스크립트
    const proxyAddress = "0x1B07046505D79bFb244323Ac2109000C8cF391Dd";
    const SaleJolaman = await hre.ethers.getContractFactory("SaleJolaman");
    const ssu2 = await upgrades.upgradeProxy(proxyAddress, SaleJolaman);

    console.log("SaleJolaman deployed to : ", ssu2.address);

    
  }

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
