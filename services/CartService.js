const models = require('../models');

module.exports = {
  getById: async (id) => {
    return models.Cart.findByPk(id, { include: [{ model: models.Client }, { model: models.Product, as: 'products' }]});
  },
  create: async (clientId) => {
    return models.Cart.create({ clientId });
  }
};
