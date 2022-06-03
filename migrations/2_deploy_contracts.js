const ZenconToken = artifacts.require("ZenconToken");
const ZenconNFT = artifacts.require("ZenconNFT");

module.exports = async function (deployer) {
    await deployer.deploy(ZenconToken);
    const tokenAddress = ZenconToken.address;
    // token is deployed before the NFT-contract to pass the token-address to the constructor
    await deployer.deploy(ZenconNFT, tokenAddress);
};
