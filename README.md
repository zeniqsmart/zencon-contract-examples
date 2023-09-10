# Deprecation notice

This repository has been deprecated in favor of https://github.com/zeniqsmart/distributor-contract-hardhat.
The truffle project setup in this repository is no longer maintained.
If you are starting a new project on the ZENIQ Smartchain, then we recommend using hardhat instead of truffle.

# Zencon Contract Example

This repository implements "reward-NFTs" that can be used as vouchers or gift cards.
You can expand the code to implement application-specific NFT-features, commonly known as "utility NFTs".

Moreover, this repository includes a truffle-configuration for the ZENIQ Smart Chain.
Visit https://www.zeniq.dev/ for more information about the ZENIQ Smart Chain.

## Build

Clone the repo, run `npm install`.
Build the contracts with `npm run build`.

## Test

Before running tests, you should launch a local Ethereum-blockchain on your machine.
We recommend using [Ganache](https://trufflesuite.com/ganache/) as a local Ethereum-blockchain.

Afterwards, run tests with `npm run test`.

## Deploy

Before deploying a contract, you need to fund a wallet with ZENIQ.
For example, you can use MetaMask to create a new wallet and obtain an address.
As explained in https://www.zeniq.dev/, you can connect MetaMask to the ZENIQ Smart Chain.

Once you have a funded wallet, you can copy your 12 words into a `.secret` file in this repo.
Finally, run a deployment with `npm run deploy`.
