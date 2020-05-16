const User = require('../models').user;
const genericError  = require('../helpers/generic-errors.helper')
const genericMessage = require('../helpers/generic-messages.helper')
const genericResponse = require('../helpers/generic-response.helper')
// TODO: Agregar validaciones, a nivel de código, adicional a las validaciones de bd que ya están.
// TODO: Agregar sanitizadores y escapes de peticiones.
exports.signup = async (data) => {
    return new Promise( async (resolve, reject) =>{
        let user = new User(data)
        try {
            await user.save()
            let message = "Registro exitoso, se ha enviado un correo electrónico de verificación de su cuenta"
            let r = genericResponse.success(genericMessage.success.CODE, genericMessage.success.STATUS, message )
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