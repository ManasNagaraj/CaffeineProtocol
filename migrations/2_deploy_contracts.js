var hashfunc = artifacts.require("./hashfunc.sol");

module.exports = function(deployer) {
  deployer.deploy(hashfunc);
};
