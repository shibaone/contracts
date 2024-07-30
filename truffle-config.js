require('dotenv').config()
require('babel-register')
require('babel-polyfill')

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised).should()

var HDWalletProvider = require('@truffle/hdwallet-provider')

const MNEMONIC =
  process.env.MNEMONIC ? {
    privateKeys: [process.env.MNEMONIC]
  } : {
    mnemonic: {
      phrase: 'clock radar mass judge dismiss just intact mind resemble fringe diary casino'
    }
  }
const API_KEY = process.env.API_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: 'localhost',
      port: 9545,
      network_id: '*', // match any network
      skipDryRun: true,
      gas: 70000000
    },
    bor: {
      provider: () =>
        new HDWalletProvider({
          ...MNEMONIC,
          providerOrUrl: `http://localhost:8545`
        }),
      network_id: '*', // match any network
      gasPrice: '0'
    },
    matic: {
      provider: () =>
        new HDWalletProvider({
          ...MNEMONIC,
          providerOrUrl: `https://rpc-mainnet.matic.network`
        }),
      network_id: '137',
      gasPrice: '90000000000'
    },
    mumbai: {
      provider: () =>
        new HDWalletProvider({
          ...MNEMONIC,
          providerOrUrl: `https://rpc-mumbai.matic.today`
        }),
      network_id: '80001'
    },
    holesky: {
      provider: function() {
        return new HDWalletProvider({
          ...MNEMONIC,
          providerOrUrl: `https://eth-holesky.g.alchemy.com/v2/${API_KEY}`
        })
      },
      network_id: 17000,
      gas: 8000000,
      gasPrice: 10000000000, // 10 gwei
      skipDryRun: true
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider({
          ...MNEMONIC,
          providerOrUrl: `https://mainnet.infura.io/v3/${API_KEY}`
        })
      },
      network_id: 1,
      gas: 3000000,
      gasPrice: '45000000000'
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          MNEMONIC,
          `https://rinkeby.infura.io/v3/${API_KEY}`
        )
      },
      network_id: 4,
      gas: 7000000,
      gasPrice: 20000000000, // 20 gwei
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: '0.5.17',
      docker: false,
      parser: 'solcjs',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: 'istanbul'
      }
    }
  },
  mocha: {
    bail: false,
    reporter: 'eth-gas-reporter',
    reporterOptions: {
      currency: 'USD',
      gasPrice: 21,
      outputFile: '/dev/null',
      showTimeSpent: true
    }
  },
  plugins: ['solidity-coverage', 'truffle-plugin-verify', 'truffle-contract-size'],
  verify: {
    preamble: 'Matic network contracts'
  },
  api_keys: {
    etherscan: ETHERSCAN_API_KEY
  }
}

