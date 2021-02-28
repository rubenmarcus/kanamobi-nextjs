const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(sgTransport({
  auth: {
    api_key: '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'
  }
}))

const send = ({ email, name, msg,tel }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from,
    to: 'r@rpaschoarelli.com',
    subject: `Kanamobi nova mensagem de  ${from}`,
    text: `Nome: ${name} \n Telefone: ${tel} \n Assunto: ${msg}`,
    replyTo: from
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

module.exports = send
