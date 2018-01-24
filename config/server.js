'use strict';

const joi = require('joi');

const schema = joi.object({
    port: joi.number().default(3001)
}).unknown().required();

const { error, value } = joi.validate(process.env, schema);

if (error) {
    throw new Error('Config validation error:', error.message);
}

module.exports = {
    port: value.port
};
