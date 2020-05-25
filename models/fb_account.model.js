module.exports = (sequelize, Sequelize) => {
    const fb_account = sequelize.define( 'fb_account', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        user: {
            type: Sequelize.STRING
        }
    })
    return fb_account
}