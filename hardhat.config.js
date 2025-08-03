require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    sepolia_public: {
      url: "https://rpc.sepolia.org",
      accounts: [process.env.PRIVATE_KEY],
    },
    sepolia_ankr: {
      url: "https://rpc.ankr.com/eth_sepolia",
      accounts: [process.env.PRIVATE_KEY],
    },
    sepolia_alchemy: {
      url: process.env.ALCHEMY_SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  },
};
