var Wallet = require('ethereumjs-wallet');
const EthWallet = Wallet.generate();
console.log("address: " + EthWallet.getAddressString());
console.log("privateKey: " + EthWallet.getPrivateKeyString());