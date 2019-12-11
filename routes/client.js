const router = require('express').Router();
const clientService = require('../services/ClientService');

router.get('/', async(req, res) => {
  const clients = await clientService.getAll();
  res.json(clients);
});

router.post('/', async (req, res) => {
  const { name } = req.body;
  const client = await clientService.create(name);
  res.json(client);
});

module.exports = router;