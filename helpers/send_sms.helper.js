const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);

exports.send = async (message, destino) => {
  return new Promise( async (resolve, reject) => { 
    try {
      client.messages
      .create({
         body: message,
         from: '+18015163729',
         to: '+52'+destino
      })
      .then(message => {
        resolve(message.sid)
      })
      .catch(error => {
        reject(error)
      })
    } catch (error) {
      reject(error)
    }
  })
}

