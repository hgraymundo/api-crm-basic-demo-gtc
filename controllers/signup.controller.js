const signupService = require("../services/user.service")

exports.signup = async (req, res) => {
   let data = req.body
   try {
     let r = await signupService.signup(data)
     res.status(r.CODE).json(r)
   }
   catch(error) {
     console.log(error)
       res.status(error.CODE).json(error)
   }
}