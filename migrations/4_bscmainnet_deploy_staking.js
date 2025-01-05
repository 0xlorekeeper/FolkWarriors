const SkillStakingRewards = artifacts.require("SkillStakingRewards");
const LPStakingRewards = artifacts.require("LPStakingRewards");

module.exports = async function (deployer, network) {
 /* if (network === 'bscmainnet' || network === 'bscmainnet-fork') {
    const ownerAddress = '0xF903726BA1537cb9AA266bAFC11D73ba5F1eF348'; //0xF903726BA1537cb9AA266bAFC11D73ba5F1eF348  cripwaifu conta deploy
    const rewardDistributorAddress = '0xF903726BA1537cb9AA266bAFC11D73ba5F1eF348';

    const skillTokenAddress = '0x492793a9ed1ac780cbd6b56c930461bc3c568f47'; //0x5e81D8eb54cafED58018714E85F48DE7786bbc1D token na mainet
    const lpTokenAddress = ''; //cria na pankake LP do token SKILL/BNB

    // 0.001 minimumStakeAmount
    await deployer.deploy(SkillStakingRewards, ownerAddress, rewardDistributorAddress, skillTokenAddress, skillTokenAddress, 1000000000000000, 7 * 24 * 60 * 60);

    // 0.001 minimumStakeAmount
    await deployer.deploy(LPStakingRewards, ownerAddress, rewardDistributorAddress, skillTokenAddress, lpTokenAddress, 1000000000000000, 0);
  }*/
};
