import Sequelize from 'sequelize';
import getConsultaModel from './consulta.js';
import getHospitalModel from './hospital.js';
import getMedicoModel from './medico.js';
import getPacienteModel from './paciente.js';
import getPrescricaoModel from './prescricao.js';

import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',  // Adiciona o dialeto PostgreSQL
});


const models = {
  Consulta: getConsultaModel(sequelize, Sequelize),
  Hospital: getHospitalModel(sequelize, Sequelize),
  Medico: getMedicoModel(sequelize, Sequelize),
  Paciente: getPacienteModel(sequelize, Sequelize),
  Prescricao: getPrescricaoModel(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };
export default models;
