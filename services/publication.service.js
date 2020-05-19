const Publication = require('../models').publication;
const genericError  = require('../helpers/generic-errors.helper')
const genericMessage = require('../helpers/generic-messages.helper')
const genericResponse = require('../helpers/generic-response.helper')
// TODO: Agregar validaciones, a nivel de código, adicional a las validaciones de bd que ya están.
// TODO: Agregar sanitizadores y escapes de peticiones.
exports.create = async (data) => {
    return new Promise( async (resolve, reject) =>{
        let publication = new Publication(data)
        try {
            let c = await publication.save()
            let r = genericResponse.success(genericMessage.success.CODE, genericMessage.success.STATUS, genericMessage.success.MESSAGE, c)
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

exports.getAll = async (data) => {
    return new Promise( async (resolve, reject) =>{
        try {
            let p = await Publication.findAll()
            let r = genericResponse.success(genericMessage.success.CODE, genericMessage.success.STATUS, genericMessage.success.MESSAGE, p)
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

