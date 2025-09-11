const express = require("express");
const ControllerDeputados = require("../controllers/deputados");

const controllerDeputados = new ControllerDeputados();

const router = express.Router();

router.get('/api/v1/deputados', controllerDeputados.PegarTodos)
router.get('/api/v1/deputados/:id', controllerDeputados.PegarPorId)
router.post('/api/v1/deputados/:id/despesas', controllerDeputados.PegarDespesas)
router.post('/api/v1/deputados/:id/discursos', controllerDeputados.PegarDiscursos)

module.exports = router;