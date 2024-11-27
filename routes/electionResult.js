const express = require('express');
const router = express.Router();
const ElectionResult = require('../models/electionResult');

router.get('/', async(req, res) => {
    const electionResults = await ElectionResult.findAll();
    res.send(electionResults);
});

router.get('/:id', async(req, res) => {
    const electionResult = await ElectionResult.findByPk(req.params.id);
    if (!electionResult) return res.status(400).send(`Could not find the Election Result with id: ${req.params.id}`);
    res.send(electionResult);
})

router.post('/', async(req, res) => {
    const electionResult = await ElectionResult.create(req.body);
    res.send(electionResult);
});

router.put('/:id', async(req, res) => {
    const electionResult = await ElectionResult.findByPk(req.params.id);
    if (!electionResult) return res.status(400).send(`Could not find the Election Result with id: ${req.params.id}`);

    const result = await electionResult.update(req.body);
    res.send(result);
});

router.delete('/:id', async(req, res) => {
    const electionResult = await ElectionResult.findByPk(req.params.id);
    if (!electionResult) return res.status(400).send(`Could not find the Election Result with id: ${req.params.id}`);
    const deletedElectionResult = await electionResult.destroy();
    res.send(deletedElectionResult);
});

module.exports = router;