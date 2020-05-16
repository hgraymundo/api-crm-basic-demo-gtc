module.exports = (sequelize, Sequelize) => {
    const process_status= sequelize.define( 'process_status', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        description: {
            type: Sequelize.TEXT
        }
    })
    return process_status
}