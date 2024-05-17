// paciente.js

const getPacienteModel = (sequelize, { DataTypes }) => {
  const Paciente = sequelize.define("paciente", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    endereco: {
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
    // Outros campos como sexo, data de nascimento, etc.
  });

  Paciente.associate = (models) => {
    Paciente.hasMany(models.Consulta);
  };

  return Paciente;
};

export default getPacienteModel;
