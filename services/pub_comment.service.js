const PubComment = require('../models').pub_comment;
const FBPublication = require('../models').fb_publication;
const genericError  = require('../helpers/generic-errors.helper')
const genericMessage = require('../helpers/generic-messages.helper')
const genericResponse = require('../helpers/generic-response.helper')
// TODO: Agregar validaciones, a nivel de código, adicional a las validaciones de bd que ya están.
// TODO: Agregar sanitizadores y escapes de peticiones.
exports.create = async (data) => {
     console.log(data);
    return new Promise( async (resolve, reject) =>{
        let pub_comment = new PubComment(data)
        try {
            let c = await pub_comment.save()
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

exports.getAll = async () => {
    return new Promise( async (resolve, reject) =>{
        try {
            // let p = await PubComment.findAll({})
	    let p = await PubComment.findAll({ where: { status: 'CREADO' }, include: [ { model: FBPublication } ] })
            //let p = await FBPublication.findAll( 
             //   { where: { uuid: _idPublication },
              //  include: [
               //     { model: PubComment }
               // ]
            //})
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


exports.getAllBack = async (_idPublication) => {
    return new Promise( async (resolve, reject) =>{
        try {
            // let p = await PubComment.findAll({})
            let p = await FBPublication.findAll(
                { where: { uuid: _idPublication },
                include: [
                    { model: PubComment }
                ]
            })
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




exports.updateStatus = async (_idComment, _status) => {
    return new Promise( async (resolve, reject) =>{
        try {
            // let p = await PubComment.findAll({})
            let p = await PubComment.update({ status: _status }, { where: { uuid: _idComment }})
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
