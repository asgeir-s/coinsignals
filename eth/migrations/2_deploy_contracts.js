var Positions = artifacts.require("./Positions.sol");
var StringUtils = artifacts.require("./StringUtils.sol");

module.exports = function (deployer) {
  deployer.deploy(StringUtils);
  deployer.link(StringUtils, Positions);
  deployer.deploy(Positions);
};
