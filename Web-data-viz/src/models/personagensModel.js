// var database = require("../database/config")

// // function autenticar(email, senha) {
// //     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
// //     var instrucaoSql = `
// //         SELECT idUsuario, nome, email FROM usuarios WHERE email = '${email}' AND senha = '${senha}';
// //     `;
// //     console.log("Executando a instrução SQL: \n" + instrucaoSql);
// //     return database.executar(instrucaoSql);
// // }

// function cadastrarPersonagens(personagem1, personagem2, personagem3) {

//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarPersonagens():", personagem1, personagem2, personagem3);

//     var instrucaoSql = `
//         INSERT INTO Perfil (personagem1, personagem2, personagem3) VALUES ('${personagem1}', '${personagem2}', '${personagem3}');`;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);

// }

// module.exports = {
//     cadastrarPersonagens
// };