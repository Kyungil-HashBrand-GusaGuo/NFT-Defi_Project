const { upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {

    //TODO 배포 스크립트
    const metadataURI = "https://gateway.pinata.cloud/ipfs/QmaavyzfX6XzVNJx4zKCQVNDJWwQJx9xUC6gmDfddxvQ6p"
    const setdataContract = "0x7b26320EA0adf2E3c4E081D2d19D8D78DCA6d63B"
    const RandomJolaman = await hre.ethers.getContractFactory("RandomJolaman");
    const ssu = await upgrades.deployProxy(RandomJolaman, [metadataURI, setdataContract], {initializer: "initialize"});

    console.log("RandomJolaman deployed to : ", ssu.address);

    // 0x084eB7FF7225a19405FAcf27fDA5Bcd7e613b4F6
  }

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
