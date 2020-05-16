const processService = require("../services/process.service")
const customerService = require("../services/customer.service")
const statusService = require("../services/status.service")

exports.create = async (req, res) => {
  let customer = {
    "name": req.body.name,
    "cellphone": req.body.cellphone,
    "facebook_id": req.body.facebook_id,
    "sex": req.body.sex,
    "email": req.body.email,
    "address": req.body.address,
  }
   try {
     let _customer = await customerService.create(customer)
     console.log("Customer > " + _customer.data.uuid)
       try {
         let _status = await statusService.getByName("CREADO")
         console.log("Status > " + _status.data.uuid)
         try {
          let process = {
            "description": req.body.description,
            "customer_id": _customer.data.uuid,
            "status_id": _status.data.uuid,
            "process_type_id": req.body.process_type
          }
          let _process = await processService.create(process)
          res.status(_process.CODE).json(_process)
         } catch (error) {
            res.status(error.CODE).json(error)
         }
       } catch (error) {
        res.status(error.CODE).json(error)
       } 

   }
   catch(error) {
     res.status(error.CODE).json(error)
   }
}

exports.getAll = async (req, res) => {
  try {
    let r = await processService.getAll()
    res.status(r.CODE).json(r)
  }
  catch(error) {
    console.log(error)
      res.status(error.CODE).json(error)
  }
}