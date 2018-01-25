'use strict'

exports.up = (knex, Promise) => {
  return knex.schema.createTable('example', (table) => {
    table.increments('id')
    table.string('description', 100)
    table.timestamps(true)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('example')
}
