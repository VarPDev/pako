const functions = require('@google-cloud/functions-framework');
const { buildClient } = require('@datocms/cma-client-node');
const { Resend } = require('resend');
const EmailDevIta = require('./email-dev-ita.js');
const EmailDevEng = require('./email-dev-eng.js');
const EmailFinanceIta = require('./email-finance-ita.js');
const EmailFinanceEng = require('./email-finance-eng.js');

functions.http('send', async (req, res) => {
    try {
        // Make sure the API token has access to the CMA, and is stored securely
        const client = buildClient({ apiToken: process.env.DATOCMS_API_TOKEN });
        const resend = new Resend(process.env.RESEND_API_TOKEN);

        const listUsers = await client.items.list({
            "filter[type]": "newsletter",
        });

        const cover = await client.uploads.find(req.body.entity.attributes.cover.upload_id);

        // This timeout need to wait site will be updated before send email
        setTimeout(() => {
            for (const user of listUsers) {
                const extra = JSON.parse(user.extra)
                const type = extra.types.find(
                    item => item.blogType === req.body.entity.attributes.blog_type,
                )

                if (!!type && type.enabled) {
                // TODO: send email
                    resend.emails.send({
                        from: 'newsletter@pasqualedelucia.com',
                        to: user.email,
                        subject: getEmailSubject(req),
                        html: getEmailTemplate(req, cover, user),
                    })
                }
            }
        }, 1000 * 60 * 5)
        
        res.send({success: true});
    } catch (e) {
        console.error('🚀 ~ send newsletter ~ error:', e)
        res.send({success: false, e});
    }
});

function getEmailSubject(req) {
    switch (true) {
        case req.body.entity.attributes.language === 'ita' && req.body.entity.attributes.blog_type === 'dev':
            return 'Nuovo articolo'
        case req.body.entity.attributes.language === 'eng' && req.body.entity.attributes.blog_type === 'dev':
            return 'New Article'
        case req.body.entity.attributes.language === 'ita' && req.body.entity.attributes.blog_type === 'finance':
            return 'Nuovo articolo'
        case req.body.entity.attributes.language === 'eng' && req.body.entity.attributes.blog_type === 'finance':
            return 'New Article'
        default:
            return 'New Article'
    }
}

function getEmailTemplate(req, cover, user) {
    switch (true) {
        case req.body.entity.attributes.language === 'ita' && req.body.entity.attributes.blog_type === 'dev':
            return EmailDevIta(process.env.PAKO_WEBSITE, req.body.entity, cover, user)
        case req.body.entity.attributes.language === 'eng' && req.body.entity.attributes.blog_type === 'dev':
            return EmailDevIta(process.env.PAKO_WEBSITE, req.body.entity, cover, user)
        case req.body.entity.attributes.language === 'ita' && req.body.entity.attributes.blog_type === 'finance':
            return EmailFinanceIta(process.env.PAKO_WEBSITE, req.body.entity, cover, user)
        case req.body.entity.attributes.language === 'eng' && req.body.entity.attributes.blog_type === 'finance':
            return EmailFinanceEng(process.env.PAKO_WEBSITE, req.body.entity, cover, user)
        default:
            return EmailDevEng(process.env.PAKO_WEBSITE, req.body.entity, cover, user)
    }
}
