const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const LPStakingRewardsUpgradeable = artifacts.require("LPStakingRewardsUpgradeable");

module.exports = async function (deployer, network, accounts) {
  if (network === 'bscmainnet' || network === 'bscmainnet-fork') {
    const rewardDistributorAddress = '0x82E7b1956e57087B12957f833c56bc15Fe9e89eB'; //deployer

    const skillTokenAddress = '0x492793a9ed1ac780cbd6b56c930461bc3c568f47'; //folk token
    const lpTokenAddress = '0xbf72358bb44f178b3b779bdf47618e967281b719';  //Pankake swap SKILL-WBNB

    const lpSr = await deployProxy(LPStakingRewardsUpgradeable, [accounts[0], rewardDistributorAddress, skillTokenAddress, lpTokenAddress, 0], { deployer });
	
	await lpSr.migrateTo_8cb6e70('1000000000000000');
  }
};

