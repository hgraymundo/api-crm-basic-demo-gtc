const personalService = require("../services/personal.service")

exports.create = async (req, res) => {
   let data = req.body
   try {
     let r = await personalService.create(data)
     res.status(r.CODE).json(r)
   }
   catch(error) {
     console.log(error)
       res.status(error.CODE).json(error)
   }
}
exports.getAll = async (req, res) => {
  try {
    let r = await personalService.getAll()
    res.status(r.CODE).json(r)
  }
  catch(error) {
    console.log(error)
      res.status(error.CODE).json(error)
  }
}