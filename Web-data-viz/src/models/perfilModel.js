var database = require("../database/config")

function cadastrarFuncao(funcao, idUsuario) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", funcao);

    var instrucaoSql = `
        INSERT INTO Perfil (funcao, fkUsuario) VALUES ('${funcao}', ${idUsuario});`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function cadastrarPersonagens(personagem1, personagem2, personagem3, idUsuario) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarPersonagens():", personagem1, personagem2, personagem3);

    var instrucaoSql = `
    UPDATE Perfil set personagem1 = '${personagem1}', personagem2 = '${personagem2}', personagem3 = '${personagem3}' 
    WHERE fkUsuario = ${idUsuario};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

module.exports = {
    cadastrarFuncao,
    cadastrarPersonagens
};