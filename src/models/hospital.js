const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');

const Hospital = sequelize.define('Hospital', {
  
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: true
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  historico: {
    type: DataTypes.TEXT,
    allowNull: true
  }
  // Adicione outros campos conforme necessário
});

module.exports = Hospital;