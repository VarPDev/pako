const functions = require('@google-cloud/functions-framework')
const { buildClient } = require('@datocms/cma-client-node')

functions.http('comment', async (req, res) => {
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

      const record = await client.items.create({
        item_type: { type: 'item_type', id: 'CFxnZK8TRfGnoA96kjjwaQ' },
        name: req.query.name,
        message: req.query.message,
        page_link: req.query.pageId,
        ...(req.query.parentCommentId && {
          parent_comment: req.query.parentCommentId,
        }),
      })

      res.send({ success: true, record })
    } catch (e) {
      console.error('🚀 ~ comment ~ error:', e)
      res.send({ success: false, e })
    }
  }
})
