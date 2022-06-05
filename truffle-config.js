
const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require("fs");
const path = require("path");

const zscURL = "https://smart1.zeniq.network:9545";
//const zscURL = "https://smart2.zeniq.network:9545";
//const zscURL = "https://smart3.zeniq.network:9545";
const zscChainID = 383414847825;

// create a .secret file to hold your 12 words
const pathToMnemonics = path.resolve(".secret");

module.exports = {
    networks: {
        // Useful for testing. The `development` name is special - truffle uses it by default
        // if it's defined here and no other network is specified at the command line.
        // You should run a client (like ganache-cli, geth or parity) in a separate terminal.
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*",
        },
        zsc: { // configuration for ZENIQ Smart Chain
           provider: () => {
               const mnemonic = fs.readFileSync(pathToMnemonics).toString().trim();
               return new HDWalletProvider(mnemonic, zscURL);
           },
           network_id: zscChainID
        },
    },

    // Configure your compilers
    compilers: {
        solc: {
            version: "pragma",    // Fetch exact version from solc-bin (default: truffle's version)
            settings: {          // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 200
                },
            }
        }
    },
};
