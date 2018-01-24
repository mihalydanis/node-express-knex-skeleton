'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('example').del()
    .then(() => {
      // Inserts seed entries
      return knex('example').insert([
        {id: 1, description: 'example 1 desc'},
        {id: 2, description: 'example 2 desc'},
        {id: 3, description: 'example 3 desc'}
      ]);
    });
};
