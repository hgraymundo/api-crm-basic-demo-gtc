module.exports = (sequelize, Sequelize) => {
    const customer= sequelize.define( 'customer', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING, //Creado, En atención, Cancelado, Eliminado.
            allowNull: false,
            validate: {
                notNull: { //TODO: 'Warning "notNull" validation has been deprecated in favor of Schema based "allowNull"',
                    msg: 'Es necesario un nombre.'
                }
            }
        },
        sex: {
            type: Sequelize.ENUM('MASCULINO', 'FEMENINO',''),
            defaultValue: '' //TODO: 
        },
        cellphone: {
            type: Sequelize.STRING, 
            allowNull: false,
            validate: {
                notNull: { //TODO: 'Warning "notNull" validation has been deprecated in favor of Schema based "allowNull"',
                    msg: 'Es necesario un numero celular.'
                }
            }
        },
        facebook_id: {
            type: Sequelize.STRING, //Creado, En atención, Cancelado, Eliminado.
            allowNull: false,
            validate: {
                notNull: { //TODO: 'Warning "notNull" validation has been deprecated in favor of Schema based "allowNull"',
                    msg: 'Es necesario un facebook_id.'
                }
            }
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            trim: true,
            validate: {
                notNull: { //TODO: 'Warning "notNull" validation has been deprecated in favor of Schema based "allowNull"',
                    msg: 'Es necesario un correo electrónico.'
                },
                isEmail: {
                    msg: "Es necesario un correo electrónico valido."
                }
            }
        },
        address: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                notNull: { //TODO: 'Warning "notNull" validation has been deprecated in favor of Schema based "allowNull"',
                    msg: 'Es necesaria una dirección.'
                }
            }
        }
    })
    return customer
}