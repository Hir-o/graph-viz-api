const express = require('express');
const graph = require('../routes/graph');

module.exports = function(app){
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    app.use('/api/graph', graph);
}