const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const LP2StakingRewardsUpgradeable = artifacts.require("LP2StakingRewardsUpgradeable");

module.exports = async function (deployer, network, accounts) {
  /*if (network === 'bscmainnet' || network === 'bscmainnet-fork') {
    const rewardDistributorAddress = '0xF903726BA1537cb9AA266bAFC11D73ba5F1eF348'; //crypto waifu deployer

    const skillTokenAddress = ''; //skill token
    const lpTokenAddress = ''; //SKILL-WBNB //pankake

    await deployProxy(LP2StakingRewardsUpgradeable, [accounts[0], rewardDistributorAddress, skillTokenAddress, lpTokenAddress, 0], { deployer });
  }*/
};

