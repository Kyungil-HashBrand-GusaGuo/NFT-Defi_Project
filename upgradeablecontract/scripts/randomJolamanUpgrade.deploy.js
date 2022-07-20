const { upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {

    //TODO 배포 스크립트
    const metadataURI = "https://gateway.pinata.cloud/ipfs/QmSYcEfrhJnYUtgqnF7wGcRoupQdwKNN5ioSnbMSuK2LSx"
    const setdataContract = "0xaB75CB8f441BE3Cc486F6d36bC26A43959cB5b5d"
    const RandomJolaman = await hre.ethers.getContractFactory("RandomJolaman");
    const ssu = await upgrades.deployProxy(RandomJolaman, [metadataURI, setdataContract], {initializer: "initialize"});

    console.log("RandomJolaman deployed to : ", ssu.address);

    // 0xAb8c03C195e905B9eEe38338C48944E7D5F66Eba
  }

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
