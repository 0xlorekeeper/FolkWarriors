const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const LPStakingRewardsUpgradeable = artifacts.require("LPStakingRewardsUpgradeable");

module.exports = async function (deployer, network, accounts) {
  if (network === 'bscmainnet' || network === 'bscmainnet-fork') {
	const lpstake = await upgradeProxy(LPStakingRewardsUpgradeable.address, LPStakingRewardsUpgradeable, { deployer });
	await lpstake.setstakingToken('0xbf72358bb44f178b3b779bdf47618e967281b719');
  }
};
