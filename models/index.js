const Sequelize = require('sequelize');
const env = require('../configuration/db.configuration')

const sequelize = new Sequelize(env.DATABASE, env.USER, env.PASSWORD, {
  host: env.HOST,
  dialect: env.DIALECT,
  operatorsAliases: 0,
  pool: {
    max: env.POOL.MAX,
    min: env.POOL.MIN,
    acquire: env.POOL.ACQUIRE,
    idle: env.POOL.IDLE
  },
  dialectOptions: {
    dateStrings: true,
    typeCast: true
  },
  timezone: '-06:00'
});
var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.user  = require('./user.model.js')(sequelize, Sequelize);
// db.status  = require('./status.model.js')(sequelize, Sequelize);
// db.process_type  = require('./process_type.model.js')(sequelize, Sequelize);
// db.customer  = require('./customer.model.js')(sequelize, Sequelize);
// db.process  = require('./process.model.js')(sequelize, Sequelize);
// db.process_status = require('./process_status.model.js')(sequelize, Sequelize);
// db.personal = require('./personal.model.js')(sequelize, Sequelize);
// db.advice = require('./advice.model.js')(sequelize, Sequelize);
db.account = require('./account.model')(sequelize, Sequelize);
db.pub_comment = require('./comment.model')(sequelize, Sequelize);

db.fb_account = require('./fb_account.model')(sequelize, Sequelize);
db.fb_publication = require('./fb_publication.model.js')(sequelize, Sequelize);
db.fb_comment = require('./fb_comment.model.js')(sequelize, Sequelize);

db.fb_account.hasMany(db.fb_publication, { foreignKey: 'fb_account_id', sourceKey: 'uuid'});
db.fb_publication.belongsTo(db.fb_account, { foreignKey: 'fb_account_id', targetKey: 'uuid'});

db.fb_publication.hasMany(db.fb_comment, { foreignKey: 'fb_publication_id', sourceKey: 'uuid'});
db.fb_comment.belongsTo(db.fb_publication, { foreignKey: 'fb_publication_id', targetKey: 'uuid'});

// db.fb_account.hasMany(db.comment, { foreignKey: 'fb_account_id', sourceKey: 'uuid'});
// db.comment.belongsTo(db.fb_account, { foreignKey: 'fb_account_id', targetKey: 'uuid'});

db.fb_publication.hasMany(db.pub_comment, { foreignKey: 'publication_id', sourceKey: 'uuid'});
db.pub_comment.belongsTo(db.fb_publication, { foreignKey: 'publication_id', targetKey: 'uuid'});

// db.publication.hasMany(db.fb_comment, { foreignKey: 'publication_id', sourceKey: 'uuid'});
// db.fb_comment.belongsTo(db.publication, { foreignKey: 'publication_id', targetKey: 'uuid'});


// db.customer.hasMany(db.process, { foreignKey: 'customer_id', sourceKey: 'uuid'});
// db.process.belongsTo(db.customer, { foreignKey: 'customer_id', targetKey: 'uuid'});
// db.status.hasMany(db.process, { foreignKey: 'status_id', sourceKey: 'uuid'});
// db.process.belongsTo(db.status, { foreignKey: 'status_id', targetKey: 'uuid'});
// db.process_type.hasMany(db.process, { foreignKey: 'process_type_id', sourceKey: 'uuid'});
// db.process.belongsTo(db.process_type, { foreignKey: 'process_type_id', targetKey: 'uuid'});

// db.process_status = require('./process_status.model.js')(sequelize, Sequelize);

// db.process.hasMany(db.advice, { foreignKey: 'process_id', sourceKey: 'uuid'});
// db.advice.belongsTo(db.process, { foreignKey: 'process_id', targetKey: 'uuid'});
// db.personal.hasMany(db.advice, { foreignKey: 'personal_id', sourceKey: 'uuid'});
// db.advice.belongsTo(db.personal, { foreignKey: 'personal_id', targetKey: 'uuid'});


// db.status.hasMany(db.process_status, { foreignKey: 'status_id', sourceKey: 'uuid'});
// db.process_status.belongsTo(db.status, { foreignKey: 'status_id', targetKey: 'uuid'});


// db.inventory.hasMany(db.move, { foreignKey: 'inventory_id', sourceKey: 'uuid'});
// db.move.belongsTo(db.inventory, { foreignKey: 'inventory_id', targetKey: 'uuid'});

// 

module.exports = db;
