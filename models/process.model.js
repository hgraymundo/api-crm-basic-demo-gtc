module.exports = (sequelize, Sequelize) => {
    const process = sequelize.define( 'process', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                notNull: { //TODO: 'Warning "notNull" validation has been deprecated in favor of Schema based "allowNull"',
                    msg: 'Es necesaria una descripción.'
                }
            }
        }
    })
    return process
}