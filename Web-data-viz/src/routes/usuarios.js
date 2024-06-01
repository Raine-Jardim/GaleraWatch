var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticarCadastroFuncao", function (req, res) {
    usuarioController.autenticarCadastroFuncao(req, res);
});

router.post("/autenticarLogin", function (req, res) {
    usuarioController.autenticarLogin(req, res);
});

router.post("/listarUsuarios", function (req, res) {
    usuarioController.listarUsuarios(req, res);
});

module.exports = router;