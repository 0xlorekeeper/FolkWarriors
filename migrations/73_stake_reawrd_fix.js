const SkillStakingRewardsUpgradeable = artifacts.require("SkillStakingRewardsUpgradeable");
const CryptoBlades = artifacts.require("CryptoBlades");

module.exports = async function (deployer, network, accounts) {
  if (network === 'bscmainnet' || network === 'bscmainnet-fork') {
	const game = await CryptoBlades.deployed();
	const skillStakingRewards = await SkillStakingRewardsUpgradeable.deployed();
	
  await game.migrateTo_23b3a8b(skillStakingRewards.address);
  await skillStakingRewards.migrateTo_23b3a8b(game.address);
  }
};
