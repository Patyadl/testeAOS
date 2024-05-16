const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');

const Medico = sequelize.define('Medico', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  CRM:{
    type: DataTypes.STRING,
    allowNull:false
  },
  especialidade: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  }

});

module.exports = Medico;
