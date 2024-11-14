const express = require('express');
const router = express.Router();
const Type = require('../models/type');

router.get('/', async(req, res) => {
    const types = await Type.findAll();
    res.send(types);
});

router.get('/:id', async(req, res) => {
    const type = await Type.findByPk(req.params.id);
    if (!type) return res.status(400).send(`Could not find any type with id: ${req.params.id}`);
    res.send(type);
});

router.post('/', async(req, res) => {
    const type = await Type.create(req.body);
    res.send(type);
});

router.put('/:id', async(req, res) => {
    const type = await Type.findByPk(req.params.id);
    if (!type) return res.status(400).send(`Could not find any type with id: ${req.params.id}`);
    const result = await type.update(req.body);
    res.send(result);
});

router.delete('/:id', async(req, res) => {
    const type = await Type.findByPk(req.params.id);
    if (!type) return res.status(400).send(`Could not find any type with id: ${req.params.id}`);
    const deletedType = await type.destroy();
    res.send(deletedType);
});

module.exports = router;