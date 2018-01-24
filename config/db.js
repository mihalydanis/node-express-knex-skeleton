'use strict';

require('dotenv').config();

const joi = require('joi');

console.log();

const schema = joi.object({
    client: joi.default(process.env.DB_CLIENT),
    host :  joi.default(process.env.DB_HOST),
    database :  joi.default(process.env.DB_NAME),
    user :  joi.default(process.env.DB_USER),
    password :  joi.default(process.env.DB_PASSWORD),
    migration :  joi.default(process.env.MIGRATION_TABLE)
}).unknown().required();

const { error, value } = joi.validate(process.env, schema);

if (error) {
    throw new Error('Config validation error:', error.message);
}

module.exports = {
    client: value.client,
    host: value.host,
    database: value.database,
    user: value.user,
    password: value.password,
    migration: value.migration,
};
