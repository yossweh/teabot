cat > README.md << 'EOF'
# Auto Token Sender

## Deskripsi

Script ini digunakan untuk mengirim token ke beberapa alamat secara otomatis menggunakan Node.js dan ethers.js melalui RPC `https://tea-sepolia.g.alchemy.com/public` (Chain ID: 10218). Script ini cocok digunakan untuk distribusi token dalam jumlah besar secara efisien.

## Fitur

- Mengirim token ERC-20 ke banyak alamat secara otomatis
- Membaca private key dan token address dari file `.env`
- Memasukkan jumlah token yang ingin dikirim saat menjalankan script
- Membaca daftar alamat tujuan dari file `address.txt`
- Menampilkan transaksi yang berhasil dan gagal

## Persyaratan

- Node.js terinstal di sistem
- Wallet dengan saldo token di jaringan Sepolia Testnet
- File `.env` berisi:
- Private key wallet pengirim
- Alamat kontrak token ERC-20 yang ingin dikirim
- File `address.txt` berisi daftar alamat tujuan (satu alamat per baris)

## Instalasi

1. Clone repository ini:
   ```sh
   git clone https://github.com/username/auto-token-sender.git
   cd auto-token-sender
2. Install dependencies:
   ```sh
   npm install
3. Buat file .env di root folder:
   ```sh
   PRIVATE_KEY=0x1234567890abcdef... (private key Anda)
   TOKEN_ADDRESS=0xYourTokenContractAddress
4. Buat file address.txt dan masukkan alamat tujuan:
   ```sh
   0xabc123...
   0xdef456...
5. Jalankan script dengan perintah:
    ```sh
    npm install

Saat dijalankan, Anda akan diminta untuk memasukkan jumlah token yang ingin dikirim ke setiap alamat (dalam satuan token).

Contoh:
   ```sh
   Masukkan jumlah token yang akan dikirim ke setiap alamat: 100
