const functions = require('@google-cloud/functions-framework')
const { buildClient } = require('@datocms/cma-client-node')

functions.http('news', async (req, res) => {
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
      // Make sure the API token has access to the CMA, and is stored securely
      const client = buildClient({ apiToken: process.env.DATOCMS_API_TOKEN })

      const list = await client.items.list({
        'filter[type]': 'newsletter',
        'filter[fields][email][eq]': req.query.email,
      })

      let extraToSave = {}
      let types
      let record

      if (!!list && !!list.length) {
        const item = list[0]

        const extra = JSON.parse(item.extra)
        extraToSave = { ...extra }

        types = [
          ...extra.types.filter(item => item.blogType !== req.query.blogType),
          {
            blogType: req.query.blogType,
            enabled: req.query.enabled === 'true' ? true : false,
          },
        ]

        extraToSave.types = types
        record = await client.items.update(item.id, {
          extra: JSON.stringify(extraToSave),
        })
      } else {
        types = [
          {
            blogType: req.query.blogType,
            enabled: req.query.enabled === 'true' ? true : false,
          },
        ]

        extraToSave.types = types
        record = await client.items.create({
          item_type: {
            type: 'item_type',
            id: process.env.DATOCMS_ITEM_ID_NEWSLETTER,
          },
          email: req.query.email,
          extra: JSON.stringify(extraToSave),
        })
      }

      res.send({ success: true, record })
    } catch (e) {
      console.error('🚀 ~ newsletter ~ error:', e)
      res.send({ success: false, e })
    }
  }
})
