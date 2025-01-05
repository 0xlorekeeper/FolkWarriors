const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const CryptoBlades = artifacts.require("CryptoBlades");

module.exports = async function (deployer) {
  const game = await CryptoBlades.deployed();

  const newgame = await upgradeProxy(game.address, CryptoBlades, { deployer });
  
   await newgame.migrateTo_reward_claim5d(); //fix days reward 5 dias
};
