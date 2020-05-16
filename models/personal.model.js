module.exports = (sequelize, Sequelize) => {
    const personal = sequelize.define( 'personal', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: { //TODO: 'Warning "notNull" validation has been deprecated in favor of Schema based "allowNull"',
                    msg: 'Es necesario un nombre(s).'
                }
            }
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: { //TODO: 'Warning "notNull" validation has been deprecated in favor of Schema based "allowNull"',
                    msg: 'Es necesario un apellido patero.'
                }
            }
        },
        mlastname: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: { //TODO: 'Warning "notNull" validation has been deprecated in favor of Schema based "allowNull"',
                    msg: 'Es necesario un apellido materno.'
                }
            }
        }
    })
    return personal
}