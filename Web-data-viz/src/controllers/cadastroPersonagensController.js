// var personagensModel = require("../models/personagensModel");

// function cadastrarPersonagens(req, res) {
//     // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
//     var personagem1 = req.body.personagem1Server;
//     var personagem2 = req.body.personagem2Server;
//     var personagem3 = req.body.personagem3Server;

//     // Faça as validações dos valores
//     if (personagem1 == undefined || personagem2 == undefined || personagem3 == undefined) {
//         res.status(400).send("Seu personagem está undefined!");
//     } else {

//         // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
//         personagensModel.cadastrarPersonagens(personagem1, personagem2, personagem3)
//             .then(
//                 function (resultado) {
//                     res.json(resultado);
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log(
//                         "\nHouve um erro ao realizar o cadastro! Erro: ",
//                         erro.sqlMessage
//                     );
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }
// }

// module.exports = {
//     cadastrarPersonagens
// }