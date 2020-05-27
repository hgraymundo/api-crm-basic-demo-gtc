var CryptoJS = require("crypto-js");

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
    },
    {
        hooks: {
          beforeCreate: (account) => {
            account.password = CryptoJS.AES.encrypt(account.password, 'Inch3 k3y m@M@l0n@._#').toString();
          }
        }
      }
    )
    return account
}