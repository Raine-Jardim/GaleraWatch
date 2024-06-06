var database = require("../database/config");

function personagensMaisEscolhidos() {

    var instrucaoSql = `select * from GaleraWatch.vw_totalPersonagens`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function personagemMaisEscolhido() {

    var instrucaoSql = `select nome, 
    total 
from GaleraWatch.vw_totalPersonagens
where total >= (select max(total) from GaleraWatch.vw_totalPersonagens)`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function funcaoMaisEscolhida() {

    var instrucaoSql = `select funcao, contador from GaleraWatch.vw_totalFuncoes
    where contador >= (select max(contador) from GaleraWatch.vw_totalFuncoes)`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    personagensMaisEscolhidos,
    personagemMaisEscolhido,
    funcaoMaisEscolhida

}
