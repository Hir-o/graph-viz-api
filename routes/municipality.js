const express = require('express');
const router = express.Router();
const Municipality = require('../models/municipality');

router.get('/', async(req, res) => {
    const municipalities = await Municipality.findAll();
    res.send(municipalities);
});

router.get('/:id', async(req, res) => {
    const municipality = await Municipality.findByPk(req.params.id);
    if (!municipality) return res.status(400).send(`Municipality with id: ${req.params.id} was not found.`);

    res.send(municipality);
});

router.post('/', async(req, res) => {
    const municipality = await Municipality.create(req.body);
    const result = await municipality.save();
    res.send(result);
});

router.put('/:id', async(req, res) => {
    const municipality = await Municipality.findByPk(req.params.id);
    if (!municipality) return res.status(400).send(`Municipality with id: ${req.params.id} was not found.`);

    const result = await municipality.update(req.body);
    res.send(result);
});

router.delete('/:id', async(req, res) => {
    const municipality = await Municipality.findByPk(req.params.id);
    if (!municipality) return res.status(400).send(`Municipality with id: ${req.params.id} was not found.`);

    const deletedMunicipality = await graph.destroy();
    res.send(deletedMunicipality);
});

module.exports = router;