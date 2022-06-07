const CoolNumberContract = artifacts.require("CoolNumberContract");

module.exports = async function (deployer) {
    // token is deployed before the NFT-contract to pass the token-address to the constructor
    await deployer.deploy(CoolNumberContract);
};
