// require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("hardhat-klaytn-patch");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 const NETWORK_ID = '1001'
 const URL = 'https://api.baobab.klaytn.net:8651'
 const PRIVATE_KEY = "0xd356296163500011c5beb930b9ba117284be97330173d6c2c429ca64e888ec93"

const accessKeyId = "KASKC01QV0O2O5AOZOTPW6P1";
const secretAccessKey = "jYcJcUE1IH1aIHc6MfNsytmsy5ezm8mY_VlruE6O";

module.exports = {
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    hardhat: {},
    baobab: {
      url: URL,
      httpHeaders: {
        'Authorization': 'Basic ' + Buffer.from(accessKeyId + ':' + secretAccessKey).toString('base64'),
        'x-chain-id': '1001',
      },
      accounts: [
        PRIVATE_KEY
      ],
      chainId: 1001,
      gas: 8500000,
      gasPrice: 250000000000,
    },

  },
  mocha: {
    timeout: 100000
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.8.1",
        settings: {},
      },
      {
        version: "0.8.2",
        settings: {},
      },
    ],   
},

};
