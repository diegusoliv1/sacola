

module.exports = (sequelize, DataTypes) => {
  const CartProduct = sequelize.define('CartProduct', {
    cartId: { field: 'cart_id', type: DataTypes.UUID, unique: 'cart_product' },
    productId: { field: 'product_id', type: DataTypes.UUID, unique: 'cart_product' },
    amount: DataTypes.INTEGER
  });

  return CartProduct;
};