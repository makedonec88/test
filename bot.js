const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '442918247:AAF9lN3X7mxbgUxpKeQq3Ij5omyLkVcIoUk';

const chat = '115642462';

class ScrapperBot extends TelegramBot {
  constructor() {
    super(token, {polling: true})
    this.chatId = chat
  }

  sendMessageTo(msg) {
    this.sendMessage(this.chatId, msg, {parse_mode: 'Markdown'})
  }

}
// Create a bot that uses 'polling' to fetch new updates
const bot = new ScrapperBot(token, {polling: true});

// // Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message
//
//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"
//
//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, resp);
// });

// // Listen for any kind of message. There are different kinds of
// // messages.
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//
//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, `Received your message - ${chatId}`);
// });

bot.sendMessageTo(
    `*Hi*,\n  I've started to work ?`
)

module.exports = bot