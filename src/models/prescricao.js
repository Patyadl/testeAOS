const getPrescricaoModel = (sequelize, { DataTypes }) => {
  const Prescricao = sequelize.define("prescricao", {
    medicamento: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    dosagem: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    intervalo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    duracao: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // Outros campos como instruções, data de prescrição, etc.
  });

  Prescricao.associate = (models) => {
    Prescricao.belongsTo(models.Medico);
    Prescricao.belongsTo(models.Paciente);
  };

  return Prescricao;
};

export default getPrescricaoModel;