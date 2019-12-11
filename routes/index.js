const router = require('express').Router();

const cartRouter = require('./cart');
const clientRouter = require('./client');
const productRouter = require('./product');

router.use('/cart', cartRouter);
router.use('/client', clientRouter);
router.use('/product', productRouter);

module.exports = router;
