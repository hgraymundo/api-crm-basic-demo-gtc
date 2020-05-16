const processTypeService = require("../services/process_type.service")

exports.getAll = async (req, res) => {
   let data = req.body
   try {
     let r = await processTypeService.getAll()
     res.status(r.CODE).json(r)
   }
   catch(error) {
     console.log(error)
       res.status(error.CODE).json(error)
   }
}
