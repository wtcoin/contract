// GENERATED CODE
// DO NOT MODIFY
var Contract = {};
Contract['AccountRecovery'] = web3.eth.contract([{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"into","type":"address"}],"name":"recoverBalance","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"recoveryAccount","type":"address"}],"name":"designateRecoveryAccount","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchCryptoFiat","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_cryptoFiat","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":true,"name":"destination","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":false,"name":"frozen","type":"bool"}],"name":"AccountFreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"SupplyChanged","type":"event"}]);
Contract['Accounts'] = web3.eth.contract([{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"stateOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"destination","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchCryptoFiat","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_cryptoFiat","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":true,"name":"destination","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":false,"name":"frozen","type":"bool"}],"name":"AccountFreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"SupplyChanged","type":"event"}]);
Contract['Approving'] = web3.eth.contract([{"constant":false,"inputs":[{"name":"accounts","type":"address[]"}],"name":"approveAccounts","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"accountApprover","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"appointAccountApprover","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"closeAccount","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"approveAccount","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchCryptoFiat","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_cryptoFiat","type":"address"},{"name":"_accountApprover","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":true,"name":"destination","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":false,"name":"frozen","type":"bool"}],"name":"AccountFreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"SupplyChanged","type":"event"}]);
Contract['Constants'] = web3.eth.contract([{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":true,"name":"destination","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":false,"name":"frozen","type":"bool"}],"name":"AccountFreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"SupplyChanged","type":"event"}]);
Contract['CryptoFiat'] = web3.eth.contract([{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"next","type":"address"}],"name":"upgrade","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"lookup","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"contracts","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"appointMasterAccount","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"masterAccount","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"approved","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"inputs":[],"type":"constructor"}]);
Contract['Data'] = web3.eth.contract([{"constant":true,"inputs":[{"name":"context","type":"uint256"},{"name":"key","type":"bytes32"}],"name":"get","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"context","type":"uint256"},{"name":"key","type":"bytes32"},{"name":"value","type":"bytes32"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchCryptoFiat","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_cryptoFiat","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":true,"name":"destination","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":false,"name":"frozen","type":"bool"}],"name":"AccountFreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"SupplyChanged","type":"event"}]);
Contract['Delegation'] = web3.eth.contract([{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"delegatedNonceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"nonce","type":"uint256"},{"name":"destination","type":"address"},{"name":"amount","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"signature","type":"bytes"},{"name":"delegate","type":"address"}],"name":"delegatedTransfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchCryptoFiat","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_cryptoFiat","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":true,"name":"destination","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":false,"name":"frozen","type":"bool"}],"name":"AccountFreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"SupplyChanged","type":"event"}]);
Contract['Enforcement'] = web3.eth.contract([{"constant":true,"inputs":[],"name":"account","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"lawEnforcer","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"}],"name":"unfreezeAccount","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"accountDesignator","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"appointAccountDesignator","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"appointLawEnforcer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"designateAccount","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"}],"name":"freezeAccount","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchCryptoFiat","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_cryptoFiat","type":"address"},{"name":"_lawEnforcer","type":"address"},{"name":"_enforcementAccountDesignator","type":"address"},{"name":"_enforcementAccount","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":true,"name":"destination","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":false,"name":"frozen","type":"bool"}],"name":"AccountFreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"SupplyChanged","type":"event"}]);
Contract['InternalData'] = web3.eth.contract([{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchCryptoFiat","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":true,"name":"destination","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":false,"name":"frozen","type":"bool"}],"name":"AccountFreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"SupplyChanged","type":"event"}]);
Contract['MultiDelegation'] = web3.eth.contract([{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"delegatedNonceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"count","type":"uint256"},{"name":"transfers","type":"bytes"},{"name":"delegate","type":"address"}],"name":"delegatedTransfers","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchCryptoFiat","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_cryptoFiat","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":true,"name":"destination","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":false,"name":"frozen","type":"bool"}],"name":"AccountFreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"SupplyChanged","type":"event"}]);
Contract['Relay'] = web3.eth.contract([{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchCryptoFiat","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":true,"name":"destination","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":false,"name":"frozen","type":"bool"}],"name":"AccountFreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"SupplyChanged","type":"event"}]);
Contract['Reserve'] = web3.eth.contract([{"constant":true,"inputs":[],"name":"reserveBank","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"decreaseSupply","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"increaseSupply","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"appointReserveBank","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"next","type":"address"}],"name":"switchCryptoFiat","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_cryptoFiat","type":"address"},{"name":"_reserveBank","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":true,"name":"destination","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"}],"name":"AccountClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"source","type":"address"},{"indexed":false,"name":"frozen","type":"bool"}],"name":"AccountFreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"SupplyChanged","type":"event"}]);

var CryptoFiat = Contract.CryptoFiat.at('0x7f99ACA8A0C23f107729aa9929D9Dc1481B087F6');
var Data = Contract.Accounts.at(CryptoFiat.contracts(0));
var Accounts = Contract.Accounts.at(CryptoFiat.contracts(1));
var Approving = Contract.Accounts.at(CryptoFiat.contracts(2));
var Reserve = Contract.Accounts.at(CryptoFiat.contracts(3));
var Enforcement = Contract.Accounts.at(CryptoFiat.contracts(4));
var AccountRecovery = Contract.Accounts.at(CryptoFiat.contracts(5));
var Delegation = Contract.Accounts.at(CryptoFiat.contracts(6));
var MultiDelegation = Contract.Accounts.at(CryptoFiat.contracts(7));
