const router = require('express').Router();
const productService = require('../services/ProductService');

router.get('/:id', async(req, res) => {
  const { id } = req.params;
  const product = await productService.getById(id);
  res.json(product);
});

router.get('/', async (req, res) => {
  const products = await productService.getAll();
  res.json(products);
});

module.exports = router;