// Import Lib Nativa

// Import Lib Terceira
const Sequelize = require('sequelize');

// Import Modulos locais
const Cart = require('./Cart');
const Client = require('./Client');
const CartProduct = require('./CartProduct');
const Product = require('./Product');


const db = {};
const sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite'
});

db.Cart = sequelize.import("Cart", Cart);
db.Client = sequelize.import("Client", Client);
db.Product = sequelize.import("Product", Product);
db.CartProduct = sequelize.import("CartProduct", CartProduct);

db.Cart.associate(db);
db.Product.associate(db);

// if (db[Product.name].associate) {
//   db[Product.name].associate(db);
// }

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync().then(() => {
  db.Product.bulkCreate([
    { name: 'Camisa', description: 'Uma Camisa Legal', price: 10.99 },
    { name: 'Bolsa', description: 'Uma Bolsa Legal', price: 15.99 },
    { name: 'Jaqueta', description: 'Uma Jaqueta Legal', price: 20.99 }
  ]);
});

module.exports = db;