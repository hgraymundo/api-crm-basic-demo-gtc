const db_session = {
    DATABASE: 'session',
    USER: 'root',
    PASSWORD: 'root',
    HOST: '127.0.0.1',
    DIALECT: 'mysql',
    POOL: {
      MAX: 5,
      MIN: 0,
      ACQUIRE: 30000,
      IDLE: 10000
    }
  };

module.exports = db_session