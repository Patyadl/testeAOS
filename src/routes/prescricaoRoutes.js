const express = require('express');
const router = express.Router();
const prescricaoController = require('../controllers/prescricaoController');

router.post('/', prescricaoController.createPrescricao);
router.get('/', prescricaoController.getAllPrescricao);
router.get('/:id', prescricaoController.getPrescricaoById);
router.put('/:id', prescricaoController.updatePrescricao);
router.delete('/:id', prescricaoController.deletePrescricao);

module.exports = router;