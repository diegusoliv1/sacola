
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    id: { type: DataTypes.UUID, primaryKey: true },
    clientId: { field: 'client_id', type: DataTypes.UUID}
  });

  Cart.associate = (models) => {
    Cart.belongsTo(models.Client, { foreignKey: 'client_id' });
    Cart.belongsToMany(models.Product, { through: models.CartProduct, foreignKey: 'cart_id' });
  };

  return Cart;
};