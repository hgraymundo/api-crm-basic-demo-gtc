module.exports = (sequelize, Sequelize) => {
    const status= sequelize.define( 'status', {
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
        }
    })
    return status
}