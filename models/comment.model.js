module.exports = (sequelize, Sequelize) => {
    const pub_comment = sequelize.define( 'pub_comment', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        text: {
            type: Sequelize.TEXT
        },
        status: {
            type: Sequelize.ENUM('CREADO', 'PUBLICADO'),
            defaultValue: 'CREADO' //TODO: Cambia a Inactive (default) para usar el procesod de activar cuenta por medio de toke y correo electrónico
        },
        type: {
            type: Sequelize.ENUM('POSITIVO', 'NEUTRAL','NEGATIVO'), //P => verder, NE => amarillo, NE => rojo
            defaultValue: 'NEGATIVO' //TODO: Cambia a Inactive (default) para usar el procesod de activar cuenta por medio de toke y correo electrónico
        }
    })
    return pub_comment
}