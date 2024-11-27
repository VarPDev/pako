const functions = require('@google-cloud/functions-framework')
const { buildClient } = require('@datocms/cma-client-node')

functions.http('unsubscribe', async (req, res) => {
  try {
    // Make sure the API token has access to the CMA, and is stored securely
    const client = buildClient({ apiToken: process.env.DATOCMS_API_TOKEN })

    const listUsers = await client.items.list({
      'filter[type]': 'newsletter',
      'filter[email]': req.query.email,
    })

    if (!!listUsers && !!listUsers.length) {
      for (const user of listUsers) {
        const extra = JSON.parse(user.extra)
        const extraToSave = { ...extra }

        extraToSave.types = extra.types.map(item => {
          return {
            ...item,
            enabled: false,
          }
        })
        const record = await client.items.update(user.id, {
          extra: JSON.stringify(extraToSave),
        })
      }
    }

    res.redirect(303, process.env.PAKO_WEBSITE + '/unsubscribed')
  } catch (e) {
    console.error('🚀 ~ unsubscribe newsletter ~ error:', e)
    res.redirect(303, process.env.PAKO_WEBSITE + '/unsubscribed-failed')
  }
})
