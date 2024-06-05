var database = require("../database/config");

function personagensMaisEscolhidos() {

    var instrucaoSql = `select * from Galerawatch.vw_totalPersonagens`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function personagemMaisEscolhido() {

    var instrucaoSql = `select nome, 
    total 
from Galerawatch.vw_totalPersonagens
where total >= (select max(total) from Galerawatch.vw_totalPersonagens)`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function funcaoMaisEscolhida() {

    var instrucaoSql = `select funcao, contador from Galerawatch.vw_totalFuncoes
    where contador >= (select max(contador) from Galerawatch.vw_totalFuncoes)`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    personagensMaisEscolhidos,
    personagemMaisEscolhido,
    funcaoMaisEscolhida

}
