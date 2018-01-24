'use strict';

const config = require('../config');
const createKnex = require('knex');

const knex = createKnex({
    client: config.db.client,
    connection: {
        host :  config.db.host,
        database :  config.db.database,
        user :  config.db.user,
        password :  config.db.password
    },
    migrations: {
        tableName: config.db.migration
    }
});

module.exports = knex;
