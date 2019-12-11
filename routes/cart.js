const router = require('express').Router();
const cartService = require('../services/CartService');

router.get('/:id', async(req, res) => {
  const { id } = req.params;
  const cart = await cartService.getById(id);
  res.json(cart);
});

router.post('/', async (req, res) => {
  const { clientId } = req.body;
  const cart = await cartService.create(clientId);
  res.json(cart);
});

module.exports = router;