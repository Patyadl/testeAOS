const Hospital = require('../models/hospital');

const createHospital = async (req, res) => {
  try {
    const { nome, endereco, telefone, historico } = req.body;
    const hospital = await Hospital.create({ nome, endereco, telefone, historico });
    res.status(201).json(hospital);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllHospital = async (req, res) => {
  try {
    const hospital = await Hospital.findAll();
    res.status(200).json(hospital);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getHospitalById = async (req, res) => {
  try {
    const { id } = req.params;
    const hospital = await Hospital.findByPk(id);
    if (!hospital) {
      res.status(404).json({ message: 'Hospital not found' });
    } else {
      res.status(200).json(hospital);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateHospital = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, endereco, telefone, historico } = req.body;
    const hospital = await Hospital.findByPk(id);
    if (!hospital) {
      res.status(404).json({ message: 'Paciente not found' });
    } else {
      await hospital.update({ nome, endereco, telefone, historico });
      res.status(200).json(hospital);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteHospital = async (req, res) => {
  try {
    const { id } = req.params;
    const hospital = await Hospital.findByPk(id);
    if (!hospital) {
      res.status(404).json({ message: 'Hospital not found' });
    } else {
      await hospital.destroy();
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    createHospital,
    getAllHospital,
    getHospitalById,
    updateHospital,
    deleteHospital
  };