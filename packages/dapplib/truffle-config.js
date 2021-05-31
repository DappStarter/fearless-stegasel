require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind hub grace deposit fresh sleep'; 
let testAccounts = [
"0x72abdf84124fa4b430ea3651af5a5069752e626534cf85c49d9b335f5b9ece4b",
"0x055d79080ccc7d8a0a4ac544380cf9f642f342ebbd3c8c3bf401d69cddf41de7",
"0x684881ee910d6eb46b50ae6bd03d0186f27c7adb218c1519ccaf40cd5fcaadb4",
"0x6a90cd6aecc65093484a799895d6c4cae4043b051bb72f9d9c44eeee2b1885a5",
"0x900dc08e8619ffcc61ada2f0977e8b45f689abb1756a96f022de65bafde16da3",
"0x6fa12ba63ee0581005ca60cc165b2674e476dcbc3194c0a98b2bff2f45845f01",
"0x67158d4154fda64008d1496cfe38a473730c7b614ce4146261084ff5749b317b",
"0xc6d610a5ad9920bb72d1af221bc1f92dfaabc146d2baf7feb98b0fa4c4af6723",
"0xdb6fe3230a840b7ee03bfd53ad6cd9f4d4f6b7336125e5fd08e41054cbfc8c32",
"0xef5d739484d3749a0855298ccffc44c8dbf75508fc82042786a08d2ea509522b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


