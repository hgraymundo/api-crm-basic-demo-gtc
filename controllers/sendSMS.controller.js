// const customerService = require("../services/customer.service")
const sendSMS = require("../helpers/send_sms.helper")

exports.sendSMS = async (req, res) => {
   let { message, destino } = req.body
  //  console.log(message)
  //  console.log(destino)
   try {
     let r = await sendSMS.send(message, destino)
     console.log(r)
    res.status(200).json({message: "Envio exitoso!!!", sid: r})
   }
   catch(error) {
     console.log(error)
       res.status(error.CODE).json(error)
   }
}