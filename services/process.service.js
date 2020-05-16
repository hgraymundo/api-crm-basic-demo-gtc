const Process = require('../models').process;
const Customer = require('../models').customer;
const Status = require('../models').status;
const processType = require('../models').process_type;

const genericError  = require('../helpers/generic-errors.helper')
const genericMessage = require('../helpers/generic-messages.helper')
const genericResponse = require('../helpers/generic-response.helper')
// TODO: Agregar validaciones, a nivel de código, adicional a las validaciones de bd que ya están.
// TODO: Agregar sanitizadores y escapes de peticiones.

exports.create = async (data) => {
    return new Promise( async (resolve, reject) => {
        let process = new Process(data)
        try {
            let p = await process.save()
            console.log(p)
            let r = genericResponse.success(genericMessage.success.CODE, genericMessage.success.STATUS, genericMessage.success.MESSAGE, p )
            resolve(r)
        }
        catch(error) {
            console.log(error)
            let err = await genericError.setErrors(error)
            let e = genericResponse.error(genericMessage.error400.CODE, genericMessage.error400.STATUS, genericMessage.error400.MESSAGE, err)
            reject(e)
        }


    })
}

exports.getAll = async () => {
    return new Promise( async (resolve, reject) =>{
        try {
            let process =  await Process.findAll({ 
                attributes: { exclude:['createdAt', 'updatedAt','customer_id','status_id','process_type_id'] },
                include: [
                    { model: Customer, attributes: { exclude: ["createdAt","updatedAt"] } },
                    { model: Status, attributes: { exclude: ["createdAt","updatedAt"] } },
                    { model: processType, attributes: { exclude: ["createdAt","updatedAt"] } }
                ]
            })
            let r = genericResponse.success(genericMessage.success.CODE, genericMessage.success.STATUS, genericMessage.success.MESSAGE, process )
            resolve(r)
        }
        catch(error) {
            console.log(error)
            let err = await genericError.setErrors(error)
            let e = genericResponse.error(genericMessage.error400.CODE, genericMessage.error400.STATUS, genericMessage.error400.MESSAGE, err)
            reject(e)
        }
    })
}