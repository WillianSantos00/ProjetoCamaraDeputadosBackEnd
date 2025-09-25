const express = require("express");
const ControllerGemini = require("../controllers/gemini");

const router = express.Router();

router.get('/api/v1/gemini/resumoGeralDeputado/:id', ControllerGemini.resumoGeralDeputado)
router.get('/api/v1/gemini/resumoDespesas/:id', ControllerGemini.resumoDespesas)
router.get('/api/v1/gemini/resumoDiscursos/:id', ControllerGemini.resumoDiscursos)
router.get('/api/v1/gemini/resumoEventos/:id', ControllerGemini.resumoEventos)
router.get('/api/v1/gemini/resumoHistorico/:id', ControllerGemini.resumoHistorico)
router.get('/api/v1/gemini/resumoProposicoes/:id', ControllerGemini.resumoProposicoes)

module.exports = router;