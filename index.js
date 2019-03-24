const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const fs = require('fs')
const AnimationUrl1 = 'https://media.giphy.com/media/ya4eevXU490Iw/giphy.gif'
const AnimationUrl2 = 'https://media.giphy.com/media/LrmU6jXIjwziE/giphy.gif'

const bot = new Telegraf("783491645:AAGp_rUoPcyRDfgfGZzsXIzJ8HtXbpJThyk");


bot.start((ctx) => ctx.reply('Привет! Я бот IT_camp и Profcamp версия 0.1! Рад познакомиться! Сейчас ты можешь узнать, как выглядит твой преподаватель или наставник. Для этого просто пришли мне его имя.'))
bot.help((ctx) => ctx.reply('Пришли мне стикер'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('привет', (ctx) => ctx.reply('Hello.jpeg'))
bot.command('stream', (ctx) => ctx.replyWithPhoto({ source: fs.createReadStream('/Alice.jpeg') }))
//bot.hears('Алиса', (ctx) => ctx.replyWithPhoto({ source: './media/Alice.jpeg' }))
//bot.hears('Максим', (ctx) => ctx.replyWithPhoto({ source: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1122px-Wikipedia-logo-v2.svg.png' }))
//bot.hears('Лера', (ctx) => ctx.replyWithPhoto({ source: '/media/Lera.jpeg' }))
//bot.hears('Паша', (ctx) => ctx.replyWithPhoto('Паша сделал этого бота'))
bot.launch()
