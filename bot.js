require("dotenv").config();
const fs = require("fs");
const readline = require("readline");
const { ethers } = require("ethers");

const rpcUrl = "https://tea-sepolia.g.alchemy.com/public";
const provider = new ethers.JsonRpcProvider(rpcUrl, 10218);

const privateKey = process.env.PRIVATE_KEY;
const tokenAddress = process.env.TOKEN_ADDRESS;

const wallet = new ethers.Wallet(privateKey, provider);

const erc20Abi = [
  "function decimals() view returns (uint8)",
  "function transfer(address to, uint amount) returns (bool)"
];

const tokenContract = new ethers.Contract(tokenAddress, erc20Abi, wallet);

async function sendToken(toAddress, amount) {
  try {
    const decimals = await tokenContract.decimals();
    const parsedAmount = ethers.parseUnits(amount, decimals);
    const tx = await tokenContract.transfer(toAddress, parsedAmount);
    console.log(`Tx sent to ${toAddress}. Hash: ${tx.hash}`);
    await tx.wait();
    console.log(`Tx confirmed for ${toAddress}`);
  } catch (err) {
    console.error(`Gagal kirim ke ${toAddress}:`, err.message);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan jumlah token yang ingin dikirim ke setiap address: ", async (amount) => {
  const filePath = "address.txt";
  const addresses = fs.readFileSync(filePath, "utf-8")
    .split("\n")
    .map(line => line.trim())
    .filter(line => line.length > 0);

  console.log(`\nMengirim ${amount} token ke ${addresses.length} address...\n`);

  for (let i = 0; i < addresses.length; i++) {
    const to = addresses[i];
    console.log(`(${i + 1}/${addresses.length}) Mengirim ke ${to}...`);
    await sendToken(to, amount);
  }

  console.log("\nSemua token berhasil dikirim.");
  rl.close();
});

