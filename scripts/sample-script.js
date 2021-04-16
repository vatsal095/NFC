const fs = require("fs");
const { ethers } = require("hardhat");
const { utils } = require("ethers");
const R = require("ramda");
const main = async () => {
  //let deployConfig = (process.env.HARDHAT_NETWORK === 'kovan' || config.defaultNetwork === 'kovan') ? kovanConfig : mainnetConfig
  console.log("\n\n 📡 Deploying...\n");
  const NFC= await ethers.getContractFactory("NFC");
  const nfc = await deploy("NFC")
  await nfc.deployed();
  console.log(
    " 💾  Artifacts (address, abi, and args) saved to: ",
    chalk.blue("packages/hardhat/artifacts/"),
    "\n\n"
  );
};

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
