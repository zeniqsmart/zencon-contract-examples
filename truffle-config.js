
const HDWalletProvider = require('@truffle/hdwallet-provider');

// replace this mnemonic with your own mnemonic
const mnemonic = "grab welcome suffer position clap strong vacuum junk kind chapter clay valid";

// use a ".secret" file to avoid committing a mnemonic into Git
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
    networks: {
        // Useful for testing. The `development` name is special - truffle uses it by default
        // if it's defined here and no other network is specified at the command line.
        // You should run a client (like ganache-cli, geth or parity) in a separate terminal.
        development: {
            host: "127.0.0.1",     // Localhost (default: none)
            port: 8545,            // Standard Ethereum port (default: none)
            network_id: "*",       // Any network (default: none)
        },
        zsc: { // configuration for Zeniq Smart Chain
            // visit https://www.zeniq.dev/ for more information about the Zeniq Smart Chain
           provider: () => new HDWalletProvider(mnemonic, 'http://85.209.55.34:8545'),
           network_id: 383414847825
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
