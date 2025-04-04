Auto Token Sender
Script Node.js untuk mengirim token ERC-20 ke banyak alamat secara otomatis melalui jaringan testnet:
RPC: https://tea-sepolia.g.alchemy.com/public
Chain ID: 10218

Fitur
Mengambil private key dan token address dari file .env

Membaca daftar address tujuan dari address.txt

Mengirim token ke setiap alamat satu per satu

Jumlah token bisa diatur saat script dijalankan

Menggunakan library ethers.js

Persiapan
Clone Repository
git clone https://github.com/username/auto-token-sender.git
cd auto-token-sender

Install Dependency
npm install

Buat File .env
Isi seperti ini:
PRIVATE_KEY=0xPRIVATE_KEY_KAMU
TOKEN_ADDRESS=0xALAMAT_KONTRAK_TOKEN
(Jangan pernah membagikan file ini!)

Buat File address.txt
Isi dengan daftar address tujuan, satu per baris:
0xAddress1
0xAddress2
0xAddress3

Cara Menjalankan
Jalankan perintah:
node batchSendToken.js
Lalu masukkan jumlah token saat diminta, misalnya:
Masukkan jumlah token yang ingin dikirim ke setiap address: 10
Script akan mengirim token ke setiap address dari file address.txt.

Contoh Output
Mengirim 10 token ke 3 address...
(1/3) Mengirim ke 0xAddress1...
Tx sent to 0xAddress1. Hash: 0x123...
Tx confirmed for 0xAddress1
(2/3) Mengirim ke 0xAddress2...

Tips Keamanan
Gunakan wallet baru khusus untuk kirim token

Pastikan wallet punya cukup saldo token dan gas

Jangan upload file .env ke publik/GitHub
