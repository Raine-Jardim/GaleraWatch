var medidaModel = require("../models/medidaModel");

function pegarPersonagensDashboard(req, res) {

    console.log(`Recuperando medidas em tempo real (Personagens)`);

    medidaModel.personagensMaisEscolhidos().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado! (Personagens)")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas. (Personagens)", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function pegarValoresKpi(req, res) {

    console.log(`Recuperando medidas em tempo real (Valores - KPI)`);

    medidaModel.personagemMaisEscolhido()
        .then(
            async function (resultado) {
                if (resultado.length > 0) {
                    await medidaModel.funcaoMaisEscolhida()
                        .then((resultadoFuncao) => {
                            if (resultadoFuncao.length > 0) {
                                funcao = resultadoFuncao
                            }
                        })

                    res.json({
                        personagem: resultado,
                        funcao: funcao
                    })
                } else {
                    res.status(204).send("Nenhum resultado encontrado!")
                }
            }).catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
}


// function pegarPersonagemKpi(req, res) {

//     console.log(`Recuperando medidas em tempo real (Personagem - KPI)`);

//     medidaModel.personagemMaisEscolhido().then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado! (Personagem - KPI)")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas. (Personagem - KPI)", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }


// function pegarFuncaoKpi(req, res) {

//     console.log(`Recuperando medidas em tempo real (Função - KPI)`);

//     medidaModel.funcaoMaisEscolhida().then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado! (Função - KPI)")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas. (Função - KPI)", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }

module.exports = {
    pegarPersonagensDashboard,
    pegarValoresKpi

}