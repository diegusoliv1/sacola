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

router.post('/:id/product', async (req, res) => {
  const { id: cartId } = req.params;
  const { productId, quantity } = req.body;
  const cart = await cartService.addProduct({ cartId, productId, quantity });
  res.json(cart);
});

router.put('/:id/product', async (req, res) => {
  const { id: cartId } = req.params;
  const { productId, quantity } = req.body;
  const cart = await cartService.updateProductQuantity({ cartId, productId, quantity });
  res.json(cart);
});

router.delete('/:id/product/:productId', async (req, res) => {
  const { id: cartId, productId } = req.params;
  const cart = await cartService.removeProduct({ cartId, productId });
  res.json(cart);
});

module.exports = router;