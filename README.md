# 🚀 Telegram Raydium Volume Bot v2

Welcome to the **Telegram Raydium Volume Bot v2**! 🎉 This bot is designed to make interacting with the **Raydium DEX** on the **Solana blockchain** easier and more efficient. Manage your wallets, execute trades, and boost your volume with ease—all directly through **Telegram**! 🤖💬

## ✨ Features

- **Multiple Wallet Management**: Add, import, and manage your wallets directly in **Telegram**. 🔑💼
- **Custom Trading Settings**: Set buy/sell amounts, slippage, and distribution amounts with ease. 📊
- **Volume Booster**: Automatically execute trades at defined intervals to increase your trading volume. 📈💥
- **Solana Token Handling**: Automatically gather tokens from sub-wallets and distribute them. 💰
- **Real-Time Notifications**: Get instant updates on wallet balances, trading statuses, and errors. 📲🔔

## 🛠 Installation

Ready to get started? Follow these simple steps! 🚀

### 1. Clone the Repository

First, clone the bot repository to your local machine:

```bash
git clone https://github.com/your-username/telegram-raydium-volume-bot-v2.git
cd telegram-raydium-volume-bot-v2
```

### 2. Install Dependencies

Make sure you have **Node.js** installed, and run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add your **Telegram bot token**, **MongoDB** details, and other configurations:

```plaintext
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
MONGODB_URI=your-mongodb-uri
MONGODB_DB_NAME=your-db-name
MONGODB_COLLECTION_NAME=your-collection-name

# Volume Bot Settings
PRIVATE_KEY=your-wallet-private-key
RPC_ENDPOINT=your-rpc-endpoint
RPC_WEBSOCKET_ENDPOINT=your-rpc-websocket-endpoint

# Buy Settings
IS_RANDOM=true
DISTRIBUTION_AMOUNT=0.01
BUY_AMOUNT=0.01
BUY_UPPER_AMOUNT=0.002
BUY_LOWER_AMOUNT=0.001
BUY_INTERVAL_MAX=2000
BUY_INTERVAL_MIN=4000
CHECK_BAL_INTERVAL=3000
DISTRIBUTE_WALLET_NUM=3
SWAP_ROUTING=true

# Sell Mode
SELL_ALL_BY_TIMES=20
SELL_PERCENT=100

# Token Pair Settings
TOKEN_MINT=your-token-mint-address
POOL_ID=your-pool-id
TX_FEE=10
ADDITIONAL_FEE=0.006

# General Settings
LOG_LEVEL=info
```

### 4. Run the Bot

Now, you're ready to start the bot! 🎉 Use the following command:

```bash
npm start
```

## 📲 Available Commands

Here are some simple commands you can use within the bot to get started:

- **/start**: Start the bot and get initial instructions. 🏁
- **/wallets**: View and manage your wallet information. 💳
- **/settings**: Modify your trading parameters like buy limits and distribution amounts. ⚙️
- **/help**: Get more information on how to use the bot. ❓
- **/close**: Close any active session or message. ❌

You can also adjust your settings through **callback buttons** and **inline keyboards**, making it easy to tweak parameters like:

- Slippage 💸
- Distribution Amount 💰
- Buy Interval ⏱️
- Sell Parameters 💹

## 🧠 Setup Explanation

### 📦 MongoDB

This bot stores your data (wallet info, trading settings) in **MongoDB**. When you first interact with the bot, it creates a new entry for your settings in the database, with default configurations.

### 💬 Telegram Bot

The bot communicates with you via **Telegram API**, using inline buttons and callback queries for real-time updates.

### 🔄 Raydium Integration

The bot uses Raydium’s API to perform **token swaps** and **transactions**. It supports both automatic and manual buy/sell functions, including advanced features like **volume boosting** and **wallet distribution**.

## 🛠 Troubleshooting

Having trouble? Here are some tips to resolve common issues:

- **Bot Not Responding**: Double-check your **Telegram bot token** and **MongoDB connection** settings in the `.env` file. 🔑💬
- **Connection Issues**: Ensure your **RPC endpoints** and **wallet private key** are correctly set in the `.env` file. 🌐🔑

## 🤝 Contributing

We love contributions! ❤️ If you want to add new features, fix bugs, or improve performance, feel free to fork the repo and submit a pull request. 🚀

## 📄 License

This project is **open-source** and available under the **MIT License**. 📜

## 🎥 Video Demo

Check out this **quick video walkthrough** of how to set up and use the bot! 🎬

[Video Demo]

https://github.com/user-attachments/assets/0c9c0321-d5d1-4a42-9418-9c24f5126d49


---

### 💖 Support the Developer

Enjoying the bot? Consider supporting the developer by tipping! 🙏 Every bit helps keep this project going! 💫

**Solana Wallet Address**: `27uqtpRjpnDEiQ9SFJQKN2fEBQLEx3ptvJgGhV8AV83U`  
**ETH Wallet Address**: `0xd64EA7D33dd5a96A6522fc6b6621b515f5a11EE7`

Thank you for your support! 🌟

---

## 📞 Author

**Telegram**: [@g0drlc](https://t.me/g0drlc)

---
