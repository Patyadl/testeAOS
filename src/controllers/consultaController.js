const Consulta = require('../models/consulta');

const createConsulta = async (req, res) => {
  try {
    const { data, motivo, sintomas, diagnostico, observacoes } = req.body;
    const consulta = await Consulta.create({ data, motivo, sintomas, diagnostico, observacoes });
    res.status(201).json(consulta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllConsultas = async (req, res) => {
  try {
    const consultas = await Consulta.findAll();
    res.status(200).json(consultas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getConsultaById = async (req, res) => {
  try {
    const { id } = req.params;
    const consulta = await Consulta.findByPk(id);
    if (!consulta) {
      res.status(404).json({ message: 'Consulta not found' });
    } else {
      res.status(200).json(consulta);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateConsulta = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, motivo, sintomas, diagnostico, observacoes } = req.body;
    const consulta = await Consulta.findByPk(id);
    if (!consulta) {
      res.status(404).json({ message: 'Consulta not found' });
    } else {
      await consulta.update({ data, motivo, sintomas, diagnostico, observacoes });
      res.status(200).json(consulta);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteConsulta = async (req, res) => {
  try {
    const { id } = req.params;
    const consulta = await Consulta.findByPk(id);
    if (!consulta) {
      res.status(404).json({ message: 'Consulta not found' });
    } else {
      await consulta.destroy();
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createConsulta,
  getAllConsultas,
  getConsultaById,
  updateConsulta,
  deleteConsulta
};
