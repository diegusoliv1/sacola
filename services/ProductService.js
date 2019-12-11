const models = require('../models');

module.exports = {
  getAll: async () => {
    return models.Product.findAll();
  },
  getById: async (id) => {
    return models.Product.findByPk(id);
  }
};
