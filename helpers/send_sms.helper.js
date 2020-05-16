const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);

exports.send = async (message, destino) => {
  console.log(message)
  console.log(destino)
  return new Promise( async (resolve, reject) => { 
    try {
      client.messages
      .create({
         body: message,
         from: '+18015163729',
         to: '+52'+destino
      })
      .then(message => {
        // console.log(message)
        resolve(message.sid)
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
    } catch (error) {
      reject(error)
    }
  })
}

