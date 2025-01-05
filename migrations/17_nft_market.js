const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const SkillToken = artifacts.require("SkillToken");
const CryptoBlades = artifacts.require("CryptoBlades");
const NFTMarket = artifacts.require("NFTMarket");

module.exports = async function (deployer, network) {
  let skillTokenAddress;
  if (network === 'bscmainnet' || network === 'bscmainnet-fork') {
    skillTokenAddress = '0x492793a9ed1ac780cbd6b56c930461bc3c568f47'; //skill token
  }
  else {
    skillTokenAddress = SkillToken.address;
  }

  await deployProxy(NFTMarket, [skillTokenAddress, CryptoBlades.address], { deployer });
};
