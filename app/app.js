'use strict';

const express = require('express');
const app = express();

const knex = require('../connection');

app.use((req, res, next) => {
    next();
});

app.get('/example/:desc', async (req, res, next) => {
    knex.select()
    .where(function() {
        this.where('description', 'like', '%' + req.params.desc + '%')
    })
    .from('example').timeout(1000).limit(30)
    .then((collection) => {
        res.json({
            error: false,
            data: collection
        });
    }).catch((err) => {
        res.status(500).json({
            error: true,
            data:{
                message: err.message
            }
        });
    });

});

module.exports = app;
