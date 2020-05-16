module.exports = (sequelize, Sequelize) => {
    const process_type = sequelize.define( 'process_type', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING, //Trámite, Apoyo
            allowNull: false,
            validate: {
                notNull: { //TODO: 'Warning "notNull" validation has been deprecated in favor of Schema based "allowNull"',
                    msg: 'Es necesario un nombre.'
                }
            }
        },
        description: {
            type: Sequelize.TEXT
        }
    })
    return process_type
}