var Signals = artifacts.require("./Signals.sol");
var StringUtils = artifacts.require("./StringUtils.sol");

module.exports = function (deployer) {
  deployer.deploy(StringUtils);
  deployer.link(StringUtils, Signals);
  deployer.deploy(Signals);
};
