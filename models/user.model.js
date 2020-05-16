var bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define( 'user', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
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
            },
            unique: {
                msg: "El correo electrónico ya existe."
            } 
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {

                is: {
                    args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}/i,
                    msg: "La contraseña debe tener como mínimo 8 carácteres, al menos una mayúscula, una minúscula, un dígito y un carácter especial."
                },
                notNull:{
                    msg: "Es necesaria una contraseña."
                }
            },
        },
        status: {
            type: Sequelize.ENUM('Active', 'Inactive'),
            defaultValue: 'Inactive' //TODO: Cambia a Inactive (default) para usar el procesod de activar cuenta por medio de toke y correo electrónico
        }
    },
    {
        hooks: {
          beforeCreate: (user) => {
            const salt = bcrypt.genSaltSync(13); //TODO: Crear Constante para salt
            user.password = bcrypt.hashSync(user.password, salt);
          }
        }
       
    }
    )
    return user
}