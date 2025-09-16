const express = require("express");
const ControllerLegislatura = require("../controllers/legislaturas");

const controllerLegislatura = new ControllerLegislatura();

const router = express.Router();

router.get('/api/v1/legislatura', controllerLegislatura.PegarTodos)
router.get('/api/v1/legislatura/:id', controllerLegislatura.PegarPorId)
router.get('/api/v1/legislatura/:id/lideres', controllerLegislatura.PegarLegislaturasLideres)
router.get('/api/v1/legislatura/:id/mesa', controllerLegislatura.PegarLegislaturasMesa)

module.exports = router;