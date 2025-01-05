const SkillToken = artifacts.require("SkillToken");
const CryptoBlades = artifacts.require("CryptoBlades");
const BasicPriceOracle = artifacts.require("BasicPriceOracle");

module.exports = async function (deployer, network) {
  if (network === 'development' || network === 'development-fork' || network === 'bsctestnet' || network === 'bsctestnet-fork') {
    const token = await SkillToken.deployed();
    const game = await CryptoBlades.deployed();
    await token.transferFrom(token.address, game.address, web3.utils.toWei('0.5', 'mether')); // megaether

    const priceOracle = await BasicPriceOracle.deployed();
    await priceOracle.setCurrentPrice(web3.utils.toWei('0.04', 'ether')); // 1/5 SKILL per USD, AKA 5 USD per SKILL

    await token.transferFrom(token.address, '0xF0eA625b304a6DDD9fF5DD3A848027Fe2e42eB38', web3.utils.toWei('100', 'kether')); // Instabombr
    //await token.transferFrom(token.address, '0xF0eA625b304a6DDD9fF5DD3A848027Fe2e42eB38', web3.utils.toWei('100', 'kether')); // Instabombbr
  }
};
