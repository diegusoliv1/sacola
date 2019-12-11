
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    id: { type: DataTypes.UUID, primaryKey: true },
    name: DataTypes.STRING
  });

  return Client;
};