// medico.js

const getMedicoModel = (sequelize, { DataTypes }) => {
  const Medico = sequelize.define("medico", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    especialidade: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    crm: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    // Outros campos como email, telefone, etc.
  });

  Medico.associate = (models) => {
    Medico.hasMany(models.Consulta);
    Medico.hasMany(models.Prescricao);
  };

  return Medico;
};

export default getMedicoModel;
