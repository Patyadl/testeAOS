const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');

router.post('/', medicoController.createMedico);
router.get('/', medicoController.getAllMedicos);
router.get('/:id', medicoController.getMedicoById);
router.put('/:id', medicoController.updateMedico);
router.delete('/:id', medicoController.deleteMedico);

module.exports = router;