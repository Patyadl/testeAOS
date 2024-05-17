import Sequelize from "sequelize";
import getConsultaModel from "./consulta";
import getHospitalModel from "./hospital";
import getMedicoModel from "./medico";
import getPacienteModel from "./paciente";
import getPrescricaoModel from "./prescricao";

// Carrega variáveis de ambiente do arquivo .env
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Use isso somente se o servidor não tiver um certificado SSL autoassinado
    },
  },
});

const models = {
  Consulta: getConsultaModel(sequelize, Sequelize),
  Hospital: getHospitalModel(sequelize, Sequelize),
  Medico: getMedicoModel(sequelize, Sequelize),
  Paciente: getPacienteModel(sequelize, Sequelize),
  Prescricao: getPrescricaoModel(sequelize, Sequelize),

};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };
export default models;
