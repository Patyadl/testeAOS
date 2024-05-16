const Prescricao = require('../models/prescricao');

const createPrescricao = async (req, res) => {
  try {
    const { remedio, dosagem, horario, QuantasVezesTomar } = req.body;
    const prescricao = await Prescricao.create({ remedio, dosagem, horario, QuantasVezesTomar });
    res.status(201).json(prescricao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPrescricao = async (req, res) => {
  try {
    const prescricao = await Prescricao.findAll();
    res.status(200).json(prescricao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPrescricaoById = async (req, res) => {
  try {
    const { id } = req.params;
    const prescricao = await Prescricao.findByPk(id);
    if (!prescricao) {
      res.status(404).json({ message: 'Prescrição not found' });
    } else {
      res.status(200).json(prescricao);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePrescricao = async (req, res) => {
  try {
    const { id } = req.params;
    const { remedio, dosagem, horario, QuantasVezesTomar } = req.body;
    const prescricao = await Prescricao.findByPk(id);
    if (!prescricao) {
      res.status(404).json({ message: 'Paciente not found' });
    } else {
      await hospital.update({ remedio, dosagem, horario, QuantasVezesTomar });
      res.status(200).json(prescricao);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePrescricao = async (req, res) => {
  try {
    const { id } = req.params;
    const prescricao = await Prescricao.findByPk(id);
    if (!prescricao) {
      res.status(404).json({ message: 'Prescrição not found' });
    } else {
      await prescricao.destroy();
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    createPrescricao,
    getAllPrescricao,
    getPrescricaoById,
    updatePrescricao,
    deletePrescricao
  };