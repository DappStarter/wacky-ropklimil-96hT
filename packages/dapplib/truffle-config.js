require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture strong dash script horn harvest hero force giant'; 
let testAccounts = [
"0x8cdcda37581da02ab43ccf0354fcb655893d50231be8df8f817d59b80e697949",
"0x42ed8a5544095a0fde67a2f1a0a89bd713b84960ee900ea6e6d6ef424ce95ba7",
"0xa4c9aeb0fda0a051100a019f56736406db0c69233cb07aa96ed8e0afa3442cfd",
"0x775665b1a16846022650a4f547807b788c44d9ec62f0a4f95192d4db1057567d",
"0xc4c8d5a38c9811137a7d0d0aa2307b59ecda0bab48c216c84d611c7f7c520c79",
"0x4f0b1eb1fe01420ccf283263d07cbc8a693a276859eb2931bf8247b04ecffeb9",
"0x49a7b77b02cce81f91751622fe4c13ecd4bf13c954bbd4cdf5b7221b482ee7e2",
"0xfd06d2d84b9bd1873167439747ffd2a84df64b1aba08d59494d18ca50b344932",
"0x9d8e4954130a09c4c6047d97f583fe4af0ce5142faab4cfe651ccc08d83a7164",
"0x1342daef4dc1640c9b708a3d8cb19494ee4275109477b38619e66c98308c6e1b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

