import "dotenv/config";
import * as mongodb from "mongodb";
import TelegramBot from 'node-telegram-bot-api';
import { errorLOG, informationsLOG, successLOG } from "./utils/logs";
import { startCommand } from "./commands/start";
import { addWalletCallback, genWalletCallback, importWalletCallback, refreshWalletCallback, removeWalletCallback, removeWalletIndexCallback, walletCallback, walletInfoCallback, walletInfoIndexCallback } from "./callbacks/wallets";
import { User } from "./types/user";
import { GENERIC_ERROR_MESSAGE } from "./config";
import { checkBotStatus, checkWalletBal, controlBot, helper, set_to_standard, setBuyIntervalMaxCallback, setBuyIntervalMinCallback, setBuyLowerAmountCallback, setBuyUpperAmountCallback, setDisAmtCallback, setDisWalletNumCallback, setSellAllByTimesCallback, setSlippageCallback, setStanParamsCallback, settingsCallback } from "./callbacks/settings";
import { getBotStatus, startVolumeBooster, stopVolumeBooster } from "./volumebot";
import { gather } from "./volumebot/gather";

const token = process.env.TELEGRAM_BOT_TOKEN as string;
const bot = new TelegramBot(token, { polling: true });

const mongoUri = process.env.MONGODB_URI as string;
const client = new mongodb.MongoClient(mongoUri);

const dbName = process.env.MONGODB_DB_NAME as string;
const usersCollectionName = process.env.MONGODB_COLLECTION_NAME as string;
const commandList = [
    { command: "start", description: "Start the bot" },
    { command: "wallets", description: "This is to see ur main wallet." },
    { command: "settings", description: "You can change trading parameters." },
];

const now: Date = new Date();
let botName: string;
bot.getMe().then((user) => {
    botName = user.username!.toString();
});
bot.setMyCommands(commandList);

async function getOrCreateUser(
    chatId: number,
    name: string,
    usersCollection: mongodb.Collection
): Promise<User | null> {
    let user = (await usersCollection.findOne({ id: chatId })) as User | null;

    if (!user) {
        await usersCollection.insertOne({
            id: chatId,
            username: name,
            wallets: [],
            tokenAddr: '',  // Default or initial value
            distributionAmount: 0.01,
            buyUpperAmount: 0.002,
            buyLowerAmount: 0.001,
            buyIntervalMax: 2000,
            buyIntervalMin: 1000, // Example value, you can adjust this
            distributionWalletNum: 8,
            sellAllByTimes: 20,
            slippage: 100  // Now allowed because `slippage` is `number` in the interface
        } as User);

        // Fetch the newly inserted user
        user = (await usersCollection.findOne({ id: chatId })) as User | null;
    }

    return user;
}

async function main() {
    try {
        console.log(`${informationsLOG} Connecting to MongoDB...`);
        await client.connect();
        console.log(`${successLOG} Connected to MongoDB...`);
        const db = client.db(dbName);
        const usersCollection = db.collection(usersCollectionName);
        await usersCollection.createIndex({ id: 1 }, { unique: true });

        console.log(`${informationsLOG} Setting up bot...`);

        bot.on("message", async (msg: TelegramBot.Message) => {
            try {
                if (!msg.text) return;

                const chatId = msg.chat.id;
                const name = msg.from?.username!;
                const text = msg.text;

                let user: any;
                switch (text) {
                    case "/start":
                        console.log(
                            msg.from?.username,
                            "start volume bot : ",
                            now.toString()
                        );
                        startCommand(msg, bot);
                        break;

                    //TODO
                    default:
                        break;
                }

            } catch (error) {
                const chatId = msg.chat.id;
                console.error(`${errorLOG} ${error}`);
            }
        });

        bot.on("callback_query", async (callbackQuery) => {
            try {
                const message = callbackQuery.message;

                if (!message) return;

                const chatId = message.chat.id;
                const username = message.chat?.username!;
                const data = callbackQuery.data;

                if (!data) return;

                const user = await getOrCreateUser(chatId, username, usersCollection);

                if (!user) {
                    console.error(`${errorLOG} User not found.`);
                    return;
                }

                //TODO

                bot.answerCallbackQuery(callbackQuery.id);
            } catch (error) {
                if (!callbackQuery.message) return;

                const chatId = callbackQuery.message.chat.id;
                console.error(`${errorLOG} ${error}`);
                bot.sendMessage(chatId, GENERIC_ERROR_MESSAGE, {
                    reply_markup: {
                        inline_keyboard: [[{ text: "❌ Close", callback_data: "close" }]],
                    },
                });
            }
        });
    } catch (error) {

    }
}

main().catch(console.error);