const express = require('express');
const router = express.Router();
const Graph = require('../models/graph');
const Type = require('../models/type');
const databaseService = require('../services/databaseService');

router.get('/', async(req, res) => {
    const graphs = await Graph.findAll();
    res.send(graphs);
});

router.get('/:id', async(req, res) => {
    const graph = await Graph.findByPk(req.params.id);
    if (!graph) return res.status(400).send(`Could not find any graph with id: ${req.params.id}`);
    res.send(graph);
});

router.post('/', async(req, res) => {
    const type = await Type.findByPk(req.body.TypeId);
    if (!type) return res.status(400).send(`Invalid TypeId. Could not find any type with id:${req.body.TypeId}`);

    const graph = await Graph.create(req.body);
    res.send(graph);
});

router.put('/:id', async(req, res) => {
    const graph = await Graph.findByPk(req.params.id);
    if (!graph) return res.status(400).send(`Could not find any graph with id: ${req.params.id}`);

    if (!graph.isEditable) return res.status(400).send(`The graph with id: ${req.params.id} is not editable.`);

    const type = await Type.findByPk(req.body.TypeId);
    if (!type) return res.status(400).send(`Invalid TypeId. Could not find any type with id:${req.body.TypeId}`);

    const result = await graph.update(req.body);
    databaseService.pollGraphChanges(req.params.id);
    res.send(result);
});

router.put('/updateEditable/:id', async(req, res) => {
    const graph = await Graph.findByPk(req.params.id);
    if (!graph) return res.status(400).send(`Could not find any graph with id: ${req.params.id}`);

    const isEditable = req.body.isEditable;
    graph.isEditable = isEditable;
    await graph.save();
    res.send({ id: graph.id, isEditable: graph.isEditable });
});

router.delete('/:id', async(req, res) => {
    const graph = await Graph.findByPk(req.params.id);
    if (!graph) return res.status(400).send(`Could not find any graph with id: ${req.params.id}`);
    const deletedGraph = await graph.destroy();
    res.send(deletedGraph);
});

module.exports = router;