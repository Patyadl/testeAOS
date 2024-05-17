const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Prescricao = sequelize.define('Prescricao', {
  
  remedio: {
    type: DataTypes.STRING,
    allowNull: true
  },
  dosagem: {
    type: DataTypes.STRING,
    allowNull: true
  },
  horario: {
    type: DataTypes.STRING,
    allowNull: true
  },
  QuantasVezesTomar: {
    type: DataTypes.STRING,
    allowNull: true
  }
  
});

module.exports = Prescricao;
