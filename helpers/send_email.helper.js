const nodemailer = require('nodemailer');
const configuration = require('../configuration/email.configuration')

exports.send = async (to, subject, text, html) => {
    return new Promise( async (resolve, reject) => { 
        try {
            let transporter  = nodemailer.createTransport ({
                service: 'gmail',
                auth: {
                    user: configuration.FROM,
                    pass: configuration.PASSWORD
                }
            })
            let info = await transporter.sendMail({
                from: `Marketing :::  <${configuration.FROM}>`,
                to: to,
                subject: subject,
                text: text,
                html: html
            })
            resolve(info.messageId)
        } catch (error) {
            reject(error)
        }
    })
}
