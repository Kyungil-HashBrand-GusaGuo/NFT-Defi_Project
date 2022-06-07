const RandomJolaman = artifacts.require("RandomJolaman");

module.exports = function (deployer) {
  deployer.deploy(RandomJolaman);
};