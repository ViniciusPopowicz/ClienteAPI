const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('clientes_db', 'root', 'positivo123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;