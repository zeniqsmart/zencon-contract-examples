const ZenconNFT = artifacts.require("ZenconNFT");
const ZenconToken = artifacts.require("ZenconToken");

const e18 = 1_000_000_000_000_000_000n;

// since a deployed contract cannot be easily updated, it is advised to test contracts with unit-tests
contract('Claim Test', (accounts) => {

    it('claim same NFT twice', async function () {
        // sample of a claiming-test to verify that an NFT can be only claimed once
        const nftContract = await ZenconNFT.deployed();
        const tokenContract = await ZenconToken.deployed();

        const amount = 2_000n * e18;
        const nftId = 1;

        await tokenContract.approve(nftContract.address, amount);
        await nftContract.createRewardNFT(amount);

        await nftContract.claimRewardNFT(nftId);
        try {
            await nftContract.claimRewardNFT(nftId);
            assert.fail('No exception');
        } catch (e) {
            assert.equal(e.reason, 'cannot claim the same NFT twice', 'Wrong exception thrown');
        }
    });

    it('cannot claim an NFT that you do not own', async function () {
        const nftContract = await ZenconNFT.deployed();
        const tokenContract = await ZenconToken.deployed();

        const amount = 2_000n * e18;
        const nftId = 1;

        await tokenContract.approve(nftContract.address, amount, {from: accounts[0]});
        await nftContract.createRewardNFT(amount, {from: accounts[0]});

        try {
            await nftContract.claimRewardNFT(nftId, {from: accounts[1]});
            assert.fail('No exception');
        } catch (e) {
            assert.equal(e.reason, 'cannot claim an NFT that you do not own', 'Wrong exception thrown');
        }
    });
});
