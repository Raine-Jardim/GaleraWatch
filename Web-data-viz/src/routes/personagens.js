var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController.js");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarFuncao", function (req, res) {
    perfilController.cadastrarFuncao(req, res);
})

router.put("/cadastrarPersonagens", function (req, res) {
    perfilController.cadastrarPersonagens(req, res);
})

router.put("/cadastrarDescricao", function (req, res) {
    perfilController.cadastrarDescricao(req, res);
})

// router.post("/autenticar", function (req, res) {
//     usuarioController.autenticar(req, res);
// });

module.exports = router;