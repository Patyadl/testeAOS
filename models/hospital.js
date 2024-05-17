// hospital.js

const getHospitalModel = (sequelize, { DataTypes }) => {
  const Hospital = sequelize.define("hospital", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    localizacao: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // Outros campos como tipo de hospital, capacidade, etc.
  });

  Hospital.associate = (models) => {
    Hospital.hasMany(models.Consulta);
  };

  return Hospital;
};

export default getHospitalModel;
