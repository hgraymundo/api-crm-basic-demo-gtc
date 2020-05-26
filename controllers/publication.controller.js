const FBpublicationService = require("../services/fb_publication.service")

exports.create = async (req, res) => {
   let data = req.body
   try {
     let r = await FBpublicationService.create(data)
     res.status(r.CODE).json(r)
   }
   catch(error) {
     console.log(error)
       res.status(error.CODE).json(error)
   }
}

exports.getById = async (req, res) => {
  try {
    let r = await FBpublicationService.getById(req.params.id)
    res.status(r.CODE).json(r)
  }
  catch(error) {
    console.log(error)
      res.status(error.CODE).json(error)
  }
}