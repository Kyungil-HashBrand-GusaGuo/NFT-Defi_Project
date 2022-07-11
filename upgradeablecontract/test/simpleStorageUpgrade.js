const hre = require("hardhat");
const {expect} = require("chai");

describe("SimpleStorageUpgrade", function () {
    const wallets = waffle.provider.getWallets();

    before(async() => {
        const signer = waffle.provider.getSigner();
        const SimpleStorageUpgrade = await hre.artifacts.readArtifact("SimpleStorageUpgrade");
        this.instance = await waffle.deployContract(signer, SimpleStorageUpgrade);
    });

    it("should change the value", async () => {
        const tx = await this.instance.connect(wallets[1]).set(500);
        const v = await this.instance.get();
        expect(v).to.be.equal(500);
    })

    it("should revert", async() => {
        await expect(this.instance.set(6000))
        .to.be.revertedWith("Should be less than 5000");
    })
})