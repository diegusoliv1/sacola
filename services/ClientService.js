const models = require('../models');

module.exports = {
  getAll: async () => {
    return models.Client.findAll();
  },
  create: async (name) => {
    return models.Client.create({ name });
  }
};
