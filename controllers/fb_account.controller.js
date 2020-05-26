const FBAccountService = require("../services/fb_account.service")

exports.create = async (req, res) => {
   let data = req.body
   try {
     let r = await FBAccountService.create(data)
     res.status(r.CODE).json(r)
   }
   catch(error) {
     console.log(error)
       res.status(error.CODE).json(error)
   }
}

exports.getAll = async (req, res) => {
  try {
    let r = await FBAccountService.getAll()
    res.status(r.CODE).json(r)
  }
  catch(error) {
    console.log(error)
      res.status(error.CODE).json(error)
  }
}

exports.getPublications = async (req, res) => {
  console.log(req.params.id)
  try {
    let r = await FBAccountService.getPublications(req.params.id)
    res.status(r.CODE).json(r)
  }
  catch(error) {
    console.log(error)
      res.status(error.CODE).json(error)
  }
}