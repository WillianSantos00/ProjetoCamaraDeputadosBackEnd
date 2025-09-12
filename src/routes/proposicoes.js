const express = require("express");
const ControllerProposicoes = require("../controllers/proposicoes");

const controllerProposicoes = new ControllerProposicoes();

const router = express.Router();

router.post('/api/v1/deputado/proposicoes/:idDeputado', controllerProposicoes.PegarProposicaoDeputado)
router.get('/api/v1/proposicoes/:id', controllerProposicoes.PegarProposicaoId)

module.exports = router;