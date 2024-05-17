const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Consulta = sequelize.define('Consulta', {
  data: {
    type: DataTypes.DATE,
    allowNull: false
  },
  motivo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sintomas: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  diagnostico: {
    type: DataTypes.STRING,
    allowNull: true
  },
  observacoes: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  
});

module.exports = Consulta;
