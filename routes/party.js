const express = require('express');
const router = express.Router();
const Party = require('../models/party');

router.get('/', async(req, res) => {
    const parties = await Party.findAll();
    res.send(parties);
});

router.get('/:id', async(req, res) => {
    const party = await Party.findByPk(req.params.id);
    if (!party) return res.status(400).send(`Could not find party with id: ${req.params.id}`);
    res.send(party);
});

router.post('/', async(req, res) => {
    const party = await Party.create(req.body);
    res.send(party);
});

router.put('/:id', async(req, res) => {
    const party = await Party.findByPk(req.params.id);
    if (!party) return res.status(400).send(`Could not find party with id: ${req.params.id}`);

    const result = await party.update(req.body);
    res.send(result);
});

router.delete('/:id', async(req, res) => {
    const party = await Party.findByPk(req.params.id);
    if (!party) return res.status(400).send(`Could not find party with id: ${req.params.id}`);
    const deletedParty = await party.destroy();
    res.send(deletedParty);
});

module.exports = router;