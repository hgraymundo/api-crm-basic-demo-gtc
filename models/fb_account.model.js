module.exports = (sequelize, Sequelize) => {
    const fb_account = sequelize.define( 'fb_account', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        user: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.ENUM('LOCAL', 'SUPERVISADO'),
            defaultValue: 'SUPERVISADO' //TODO: Cambia a Inactive (default) para usar el procesod de activar cuenta por medio de toke y correo electrónico
        }
    })
    return fb_account
}