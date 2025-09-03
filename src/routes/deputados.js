const express = require("express");
const ControllerDeputados = require("../controllers/deputados");

const controllerDeputados = new ControllerDeputados();

const router = express.Router();

router.get('/api/v1/deputados', controllerDeputados.PegarTodos)

module.exports = router;