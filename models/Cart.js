
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV1 },
    clientId: { field: 'client_id', type: DataTypes.UUID}
  });

  Cart.associate = (models) => {
    Cart.belongsTo(models.Client, { alias: 'client', foreignKey: 'clientId' });
    Cart.belongsToMany(models.Product, { through: models.CartProduct, foreignKey: 'cartId', as: 'products' });
  };

  return Cart;
};