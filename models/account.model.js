module.exports = (sequelize, Sequelize) => {
    const account = sequelize.define( 'account', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        account: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    })
    return account
}