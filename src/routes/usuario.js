const express = require("express");
const ControllerUsuario = require("../controllers/usuario");

const controllerUsuario = new ControllerUsuario();
const router = express.Router();

router.post('/api/v1/usuario', controllerUsuario.Criar)

module.exports = router;
