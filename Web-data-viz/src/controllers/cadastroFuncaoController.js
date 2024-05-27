var funcaoModel = require("../models/funcaoModel");

function cadastrarFuncao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var funcao = req.body.funcaoServer;

    // Faça as validações dos valores
    if (funcao == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        funcaoModel.cadastrarFuncao(funcao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrarFuncao
}