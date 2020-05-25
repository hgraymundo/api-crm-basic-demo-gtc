const FBCommentService = require("../services/fb_comment.service")

exports.create = async (req, res) => {
   let data = req.body
   try {
     let r = await FBCommentService.create(data)
     res.status(r.CODE).json(r)
   }
   catch(error) {
     console.log(error)
       res.status(error.CODE).json(error)
   }
}
exports.getAll = async (req, res) => {
  try {
    let r = await FBCommentService.getAll(req.params.id)
    res.status(r.CODE).json(r)
  }
  catch(error) {
    console.log(error)
      res.status(error.CODE).json(error)
  }
}