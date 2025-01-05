const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const SkillStakingRewardsUpgradeable = artifacts.require("SkillStakingRewardsUpgradeable");

module.exports = async function (deployer, network, accounts) {
  if (network === 'bscmainnet' || network === 'bscmainnet-fork') {
    const skillTokenAddress = '0x492793a9ed1ac780cbd6b56c930461bc3c568f47'; //skill toen

    await deployProxy(SkillStakingRewardsUpgradeable, [accounts[0], accounts[0], skillTokenAddress, skillTokenAddress, 7 * 24 * 60 * 60], { deployer });
  }
};
