const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Paciente = sequelize.define('Paciente', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sexo: {
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

module.exports = Paciente;
