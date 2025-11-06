const express = require("express");
const nodemailer = require("nodemailer")
const ControllerUsuario = require("../controllers/usuario");

const controllerUsuario = new ControllerUsuario();
const router = express.Router();

const user = "ganbool5@gmail.com"
const pass = "mqpv mzmc cktn kdzk"

router.post('/api/v1/usuario', controllerUsuario.Criar)
router.get('/api/v1/usuario/enviarEmails', controllerUsuario.EnviarEmails)
module.exports = router;
