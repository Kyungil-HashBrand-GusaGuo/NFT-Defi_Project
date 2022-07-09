const hre = require("hardhat");
const {expect} = require("chai");

describe("SetData", function () {
    const wallets = waffle.provider.getWallets();

    before(async() => {
        const signer = waffle.provider.getSigner();
        const SimpleStorageUpgrade = await hre.artifacts.readArtifact("SetData");
        this.instance = await waffle.deployContract(signer, SimpleStorageUpgrade);
    });

    it("should change the value", async () => {
        const tx = await this.instance.connect(wallets[1]).setTotalJolamanData(500);
        const v = await this.instance.setTotalJolamanData();
        expect(v).to.be.equal(500);
    })

    it("should revert", async() => {
        await expect(this.instance.setTotalJolamanData(200))
        .to.be.revertedWith("Should be less than 5000");
    })
})