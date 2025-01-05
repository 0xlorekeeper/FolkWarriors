const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const LPStakingRewardsUpgradeable = artifacts.require("LPStakingRewardsUpgradeable");

module.exports = async function (deployer, network, accounts) {
 /* if (network === 'bscmainnet' || network === 'bscmainnet-fork') {
    const rewardDistributorAddress = '0xF903726BA1537cb9AA266bAFC11D73ba5F1eF348'; //deployer

    const skillTokenAddress = '0x5e81D8eb54cafED58018714E85F48DE7786bbc1D'; //skill toen
    const lpTokenAddress = '0x0dEB588c1EC6f1D9f348126D401f05c4c7B7a80c';  //AP Suap SKILL-WBNB

    await deployProxy(LPStakingRewardsUpgradeable, [accounts[0], rewardDistributorAddress, skillTokenAddress, lpTokenAddress, 0], { deployer });
  }*/
};

