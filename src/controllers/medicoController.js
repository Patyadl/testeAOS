const Medico = require('../models/medico');

const createMedico = async (req, res) => {
  try {
    const { nome, CRM, especialidade, telefone} = req.body;
    const medico = await Medico.create({ nome, CRM, especialidade, telefone });
    res.status(201).json(medico);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllMedicos = async ( req , res) => {
  try {
    const medicos = await Medico.findAll();
    res.status(200).json(medicos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMedicoById = async (req, res) => {
  try {
    const { id } = req.params;
    const medico = await Medico.findByPk(id);
    if (!medico) {
      res.status(404).json({ message: 'Medico not found' });
    } else {
      res.status(200).json(medico);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMedico = async (req, res) => {
  try {
    const { id } = req.params;
    const {  nome, CRM, especialidade, telefone} = req.body;
    const medico = await Medico.findByPk(id);
    if (!medico) {
      res.status(404).json({ message: 'Medico not found' });
    } else {
      await medico.update({  nome, CRM, especialidade, telefone  });
      res.status(200).json(medico);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteMedico = async (req, res) => {
  try {
    const { id } = req.params;
    const medico = await Medico.findByPk(id);
    if (!medico) {
      res.status(404).json({ message: 'Medico not found' });
    } else {
      await medico.destroy();
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMedico,
  getAllMedicos,
  getMedicoById,
  updateMedico,
  deleteMedico
};