// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers } = require("hardhat");
const hre = require("hardhat");
const fetch = require("cross-fetch");
const { constants } = require("ethers");
const { defaultAccounts } = require("@ethereum-waffle/provider");
async function main() {
  // We get the contract to deploy
  const NFC= await ethers.getContractFactory("NFC");
  console.log("Deploying NFC...");
  const nfc = await NFC.deploy();
  await nfc.deployed();
  console.log("NFC deployed to:", nfc.address);
}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
