module.exports = (sequelize, Sequelize) => {
    const fb_comment = sequelize.define( 'fb_comment', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        text: {
            type: Sequelize.TEXT
        }
    })
    return fb_comment
}