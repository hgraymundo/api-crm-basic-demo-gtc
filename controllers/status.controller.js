const statusService = require("../services/status.service")

exports.getAll = async (req, res) => {
   let data = req.body
   try {
     let r = await statusService.getAll()
     res.status(r.CODE).json(r)
   }
   catch(error) {
     console.log(error)
       res.status(error.CODE).json(error)
   }
}
