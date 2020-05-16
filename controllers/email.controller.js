const email = require("../helpers/send_email.helper")

exports.send = async (req, res) => {
   let { to, subject, text, html } = req.body
   try {
     let r = await email.send(to, subject, text, html)
    res.status(200).json({message: "Envio exitoso!!!", id: r})
   }
   catch(error) {
       res.status(error.CODE).json(error)
   }
}