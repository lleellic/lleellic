const Telegraf = require('telegraf')
const bot = new Telegraf("783491645:AAGp_rUoPcyRDfgfGZzsXIzJ8HtXbpJThyk");
bot.start((ctx) => ctx.reply('Привет! Я бот IT_camp и Profcamp версия 0.1! Рад познакомиться! Сейчас ты можешь узнать, как выглядит твой преподаватель или наставник. Для этого просто пришли мне его имя.'))
bot.help((ctx) => ctx.reply('Пришли мне стикер'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('привет', (ctx) => ctx.reply('Hello.jpeg'))
//bot.hears('Алиса', (ctx) => ctx.replyWithPhoto({ source: './media/Alice.jpeg' }))
bot.hears('Максим', (ctx) => ctx.replyWithPhoto({ source: './media/}))
//bot.hears('Лера', (ctx) => ctx.replyWithPhoto({ source: '/media/Lera.jpeg' }))
//bot.hears('Паша', (ctx) => ctx.replyWithPhoto('Паша сделал этого бота'))
bot.launch()
