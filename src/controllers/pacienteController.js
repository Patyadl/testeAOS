const Paciente = require('../models/paciente');

const createPaciente = async (req, res) => {
  try {
    const { nome, idade, sexo, endereco, telefone, historico } = req.body;
    const paciente = await Paciente.create({ nome, idade, sexo, endereco, telefone, historico });
    res.status(201).json(paciente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    res.status(200).json(pacientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPacienteById = async (req, res) => {
  try {
    const { id } = req.params;
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
      res.status(404).json({ message: 'Paciente not found' });
    } else {
      res.status(200).json(paciente);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePaciente = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, idade, sexo, endereco, telefone, historico } = req.body;
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
      res.status(404).json({ message: 'Paciente not found' });
    } else {
      await paciente.update({ nome, idade, sexo, endereco, telefone, historico });
      res.status(200).json(paciente);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePaciente = async (req, res) => {
  try {
    const { id } = req.params;
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
      res.status(404).json({ message: 'Paciente not found' });
    } else {
      await paciente.destroy();
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPaciente,
  getAllPacientes,
  getPacienteById,
  updatePaciente,
  deletePaciente
};
