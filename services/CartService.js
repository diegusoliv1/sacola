const models = require('../models');

module.exports = {
  getById: async (id) => {
    return models.Cart.findByPk(id, { include: { all: true, nested: true }});
  },
  create: async (clientId) => {
    return models.Cart.create({ clientId });
  },
  addProduct: async ({ cartId, productId, quantity }) => {
    await models.CartProduct.create({ cartId, productId, quantity });
    return module.exports.getById(cartId);
  },
  updateProductQuantity: async ({ cartId, productId, quantity }) => {
    await models.CartProduct.update({ quantity }, { where: { cartId, productId }});
    return module.exports.getById(cartId);
  },
  removeProduct: async ({ cartId, productId }) => {
    await models.CartProduct.destroy({ where: { cartId, productId }});
    return module.exports.getById(cartId);
  }
};
