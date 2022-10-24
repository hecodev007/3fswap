
 require("@nomiclabs/hardhat-truffle5");
// require("@nomiclabs/hardhat-etherscan");

// require ("hardhat-typechain");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async () => {
//   const accounts = await ethers.getSigners();
//
//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
//npx hardhat run --network ropsten scripts/sample-script.js

const fs = require('fs');
const mnemonic = fs.readFileSync(".sb").toString().trim();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1
          }
        }
      },
      {
        version: "0.4.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1
          }
        }
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1
          }
        }
      },
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1
          }
        }
      }
    ],
  },
  etherscan: {
    //  apiKey: `QVDVP85WK5D2UT77DWYEZPHGWZ2U5JFU3K` // ETH Mainnet
    apiKey: `UMHGM6QP7MVI1NUVHBW4N3NZHTPJPAFG6J` // BSC
    //  apiKey: `ESH9PS77VVG87WXZ11Z72EVNFZ8Z1TRJNS` //avax ESH9PS77VVG87WXZ11Z72EVNFZ8Z1TRJNS
  },
  // defaultNetwork: "development",
  development: {
    //  host: "127.0.0.1",     // Localhost (default: none)
    //  port: 7545,            // Standard Ethereum port (default: none)
    gas: "auto",
    gasPrice: 20,
    //   network_id: "5777",       // Any network (default: none)
  },
  mocha: {
    // timeout: 100000
  },
  networks: {
//2f62767a2fa239b64a4262a6f721ac7f534426293b5fb3cc2435397c2b7622e8
    ropsten: {
      url: `https://nd-352-084-164.p2pify.com/1dbc344d1a1de715a3d26303b5bec9d9`,
      accounts: [mnemonic],
      chainId: 3,
      gasPrice: 'auto',
      gas: "auto",
      gasMultiplier: 1.2
    },
    eth_main: {
      url: `https://nd-334-565-972.p2pify.com/b9c9354ae6cb822ab2b8504ce712960f`,
      accounts: [mnemonic],
      chainId: 1,
      gasPrice: 'auto',
      gas: "auto",
      gasMultiplier: 1.2
    },
//https://bsc-dataseed1.defibit.io/
    //https://bsc-dataseed.binance.org/
    bsc_mainnet: {
      url: `https://nd-371-554-258.p2pify.com/67873127b26f02bfaf2a036c6a02b9b5`,
      accounts: [mnemonic],
      chainId: 56,
      gas: "auto",
      gasPrice: 'auto',
      gasMultiplier: 1.2
    },
    //225be05b88b876e7f49226b0528d3bf27de2c316e395b4bcfdaf2589b33d78fa
//8539d3aa620c07df94fb28f58965fd1b15a4cca047e24cdd93d81cc8857608b0
    //https://data-seed-prebsc-1-s1.binance.org:8545/
    // wss://ws-nd-940-453-330.p2pify.com/11e9334b3865ba8bf6a5bc02884e712a
    // https://nd-940-453-330.p2pify.com/11e9334b3865ba8bf6a5bc02884e712a
    bsc_test: {
      url: `https://nd-562-569-637.p2pify.com/b3dafc5cd26a42fb478148715fbb48ed`,
      accounts: [mnemonic],
      chainId: 97,
      gas: 'auto',
      gasPrice: 'auto',
      gasMultiplier: 1.2
    },
    //https://testnet.3fchain.com/2f62767a2fa239b64a4262a6f721ac7f534426293b5fb3cc2435397c2b7622e8
//
    fff_test: {
      //https://api.avax.network/ext/bc/C/rpc
      url: `http://nodetest.3fchain.org`,
      accounts: [mnemonic],
      chainId: 98888,
      gas: 'auto',
      gasPrice: 'auto',
      timeout: 20000000,
      gasMultiplier: 1.2
    },
//ca885f10cebe7ccd33e5ca9e90f88f98b71c706a73a5b41048c1ba1e62283e02
    avax: {
      //https://api.avax.network/ext/bc/C/rpc
      url: `https://api.avax.network/ext/bc/C/rpc`,
      accounts: [mnemonic],
      chainId: 43114,
      gas: "auto",
      gasPrice: 189617709328,
      timeout: 20000000,
      gasMultiplier: 1.2
    },
    //https://prod-forge.prod.findora.org:8545   525
    //http://prod-testnet.prod.findora.org:8545/
    //http://prod-testnet.prod.findora.org:8545/


//https://dev-qa02.dev.findora.org:8545  --516
    //https://dev-qa01.dev.findora.org/
    forge_test: {
      url: `https://dev-qa01.dev.findora.org:8545`,
      accounts: [mnemonic],
      chainId: 2222,
      gas: 'auto',
      timeout: 20000000,
      gasPrice: 'auto',
      gasMultiplier: 1.2
    },

    anvil: {
      url: `https://prod-testnet.prod.findora.org:8545`,
      accounts: [mnemonic],
      chainId: 2153,
      gas: 'auto',
      timeout: 20000000,
      gasPrice: 'auto',
      gasMultiplier: 1.2
    },

    mainnet_mock: {
      //https://dev-mainnetmock.dev.findora.org
      url: `https://dev-mainnetmock.dev.findora.org:8545/`,
      accounts: [mnemonic],
      // chainId: 517,
      chainId: 2152,
      gas: 'auto',
      timeout: 20000000,
      gasPrice: 'auto',
      gasMultiplier: 1.2
    },
    mainnet_test: {
      //https://dev-mainnetmock.dev.findora.org
      url: `http://18.236.205.22:8545/`,
      accounts: [mnemonic],
      // chainId: 517,
      chainId: 2153,
      gas: 'auto',
      timeout: 20000000,
      gasPrice: 'auto',
      gasMultiplier: 1.2
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/85c51263825545bf8496006327bd98d1`,
      accounts: [mnemonic],
      chainId: 4,
      gas: "auto",
      gasPrice: "auto",
      gasMultiplier: 1.2
    },
//2f62767a2fa239b64a4262a6f721ac7f534426293b5fb3cc2435397c2b7622e8
    heco_test: {
      url: `https://http-testnet.hecochain.com`,
      accounts: [mnemonic],
      chainId: 256,
      gas: "auto",
      gasPrice: "auto",
      gasMultiplier: 1.2
    }




    // https://ropsten.infura.io/v3/fcfaf99bc9f94b148a65108207306f9e
    //wss://ropsten.infura.io/ws/v3/fcfaf99bc9f94b148a65108207306f9e
    // hardhat: {
    //     forking: {
    //         url: `https://rinkeby.infura.io/v3/85c51263825545bf8496006327bd98d1`,
    //         accounts: [mnemonic],
    //         blockNumber: 9468217
    //     }
    // }
  }
};

