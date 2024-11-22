const express = require('express');
const graph = require('../routes/graph');
const type = require('../routes/type');
const party = require('../routes/party');

module.exports = function(app){
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    app.use('/api/graphs', graph);
    app.use('/api/types', type);
    app.use('/api/parties', party);
}