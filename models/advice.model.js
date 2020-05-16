module.exports = (sequelize, Sequelize) => {
    const advice = sequelize.define( 'advice', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        comment: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                notNull: { //TODO: 'Warning "notNull" validation has been deprecated in favor of Schema based "allowNull"',
                    msg: 'Es necesario un comentario.'
                }
            }
        }
    })
    return advice
}