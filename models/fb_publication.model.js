module.exports = (sequelize, Sequelize) => {
    const fb_publication= sequelize.define( 'fb_publication', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        post_id: {
            type: Sequelize.STRING, 
        },
        text: {
            type: Sequelize.STRING, 
        },
        post_text: {
            type: Sequelize.STRING, 
        },
        shared_text: {
            type: Sequelize.STRING
        },
        time: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        likes: {
            type: Sequelize.STRING
        },
        comments: {
            type: Sequelize.STRING
        },
        shares: {
            type: Sequelize.STRING
        },
        post_url: {
            type: Sequelize.TEXT
        },
        link: {
            type: Sequelize.STRING
        }
    })
    return fb_publication
}