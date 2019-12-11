
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV1 },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL(10,2)
  });

  Product.associate = (models) => {
    Product.belongsToMany(models.Cart, { through: models.CartProduct, foreignKey: 'productId' });
  };

  return Product;
};