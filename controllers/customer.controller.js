const customerService = require("../services/customer.service")

exports.create = async (req, res) => {
   let data = req.body
   try {
     let r = await customerService.create(data)
     res.status(r.CODE).json(r)
   }
   catch(error) {
     console.log(error)
       res.status(error.CODE).json(error)
   }
}