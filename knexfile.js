const config = require('./config');

module.exports = {

  development: {
    client: config.db.client,
    connection: {
      database: config.db.database,
      user:     config.db.user,
      password: config.db.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: config.db.migration
    }
  },
  staging: {
    client: config.db.client,
    connection: {
      database: config.db.database,
      user:     config.db.user,
      password: config.db.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: config.db.migration
    }
  },
  production: {
    client: config.db.client,
    connection: {
      database: config.db.database,
      user:     config.db.user,
      password: config.db.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: config.db.migration
    }
  }

};
