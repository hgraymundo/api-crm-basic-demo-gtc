const accountSid = 'AC1d50b7a8fa091fea93dca9f1d3561a85';
const authToken = 'b1c24b06257595fcb8f928b4e4124e4f';
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

