// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
//const hre = require("hardhat");
//const Web3 = require('web3');
//npx hardhat run  scripts/deploy.js
//npx hardhat run --network fff_test scripts/deploy.js
//  npx hardhat run --network heco_test scripts/deploy.js
//const HDWalletProvider = require('@truffle/hdwallet-provider');
//const { artifacts } = require("truffle");
//import { artifacts } from "truffle"
const Web3 = require('web3');
const fs = require('fs');
//import WbnbJson from "artifacts/contracts/libraries/WBNB.sol/WBNB.json";
// const provider = new HDWalletProvider(
//     '2f62767a2fa239b64a4262a6f721ac7f534426293b5fb3cc2435397c2b7622e8',
//     'http://nodetest.3fchain.org'
// );


async function main() {
    const web3 = new Web3('http://nodetest.3fchain.org');
    //
    priv = '2f62767a2fa239b64a4262a6f721ac7f534426293b5fb3cc2435397c2b7622e8'
    web3.eth.accounts.wallet.add(priv);

    const accounts = await web3.eth.getAccounts()
    console.log("account:",   accounts);

    return;
    let path = "D:\\cqexchange\\swap\\artifacts\\contracts\\libraries\\WBNB.sol\\WBNB.json";
    wbnb = JSON.parse(fs.readFileSync(path));
    // const wbnb1 = artifacts.require("WBNB");

    // console.log("abi:", wbnb.abi);
    // const contract = await new web3.eth.Contract(wbnb.abi)
    //     .deploy({data: wbnb.bytecode, arguments: []})
    //     .send({from: accounts[0]});
    // console.log('Contract deployed to', contract.options.address);
    address = web3.eth.accounts.privateKeyToAccount(priv).address
    const deploy = async (abi, bytecode, args, privKey) => {
        const incrementer = new web3.eth.Contract(abi);
        const incrementerTx = incrementer.deploy({
            data: bytecode,
            arguments: args,
        });
        const createTransaction = await web3.eth.accounts.signTransaction(
            {
                from: address,
                data: incrementerTx.encodeABI(),
                gas: '1200000',
            },
            privKey
        );
        const createReceipt = await web3.eth.sendSignedTransaction(
            createTransaction.rawTransaction
        );
        console.log("hash:",createReceipt.transactionHash)
        console.log('Contract deployed at address', createReceipt.contractAddress);
    };



    await deploy(wbnb.abi, wbnb.bytecode, [], priv);
    return
    /*
        const WBNB = await hre.ethers.getContractFactory("WBNB");
        console.log(WBNB)

        const wbnb = await WBNB.deploy();

        await wbnb.deployed();

        console.log("wbnb address:", wbnb.address);

        const PancakeFactory = await hre.ethers.getContractFactory("PancakeFactory");
        const factory = await PancakeFactory.deploy(accounts[0]);
        await factory.deployed();
        console.log("factory address:", factory.address);

        _factory = factory.address
        _wbnb = wbnb.address
        const PancakeRouter01 = await hre.ethers.getContractFactory("PancakeRouter01");
        const router01 = await PancakeRouter01.deploy(_factory,_wbnb);
        await router01.deployed();
        console.log("router01 address:", router01.address);
    */
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
