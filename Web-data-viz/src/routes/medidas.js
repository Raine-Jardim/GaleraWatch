var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/pegarPersonagensDashboard", function (req, res) {
    medidaController.pegarPersonagensDashboard(req, res);
});

router.get("/pegarPersonagemKpi", function (req, res) {
    medidaController.pegarPersonagemKpi(req, res);
})

router.get("/pegarFuncaoKpi", function (req, res) {
    medidaController.pegarFuncaoKpi(req, res);
})

module.exports = router;