const functions = require('@google-cloud/functions-framework')
const { Telegraf } = require('telegraf')

functions.http('send', async (req, res) => {
  res.header('Content-Type', 'application/json')
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'POST')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.set('Access-Control-Max-Age', '3600')
    res.status(204).send('')
  } else {
    try {
      const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)
      await bot.telegram.sendMessage(
        process.env.TELEGRAM_CHANNEL_ID,
        `NEW COMMENT\n\n*${req.query.name}*\n\n${req.query.message}\n\n${req.query.page}`.replaceAll(
          '.',
          '\\.',
        ),
        { parse_mode: 'MarkdownV2' },
      )
      res.send(true)
    } catch (error) {
      console.error('🚀 ~ useFormAction ~ error:', error)
      res.send(false)
    }
  }
})
