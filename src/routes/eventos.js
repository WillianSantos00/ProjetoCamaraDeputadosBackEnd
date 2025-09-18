const express = require("express");
const ControllerEventos = require("../controllers/eventos");

const controllerEventos = new ControllerEventos();

const router = express.Router();

router.get('/api/v1/eventos', controllerEventos.PegarTodos)
router.get('/api/v1/eventos/:id', controllerEventos.PegarPorId)
router.get('/api/v1/eventos/:id/deputados', controllerEventos.PegarEventosDeputados)

module.exports = router;