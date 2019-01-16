var SharedTaxiBusiness = artifacts.require("./SharedTaxiBusiness.sol");

module.exports = function(deployer) {
  deployer.deploy(SharedTaxiBusiness);
};
