const express = require("express");
const ControllerPartidos = require("../controllers/partidos");

const controllerPartidos = new ControllerPartidos();

const router = express.Router();

router.get('/api/v1/partidos', controllerPartidos.PegarTodos)
router.get('/api/v1/partidos/:id', controllerPartidos.PegarPorId)
router.get('/api/v1/partidos/:id/lideres', controllerPartidos.PegarPartidoLideres)
router.get('/api/v1/partidos/:id/membros', controllerPartidos.PegarPartidoMembros)

module.exports = router;