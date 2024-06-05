var medidaModel = require("../models/medidaModel");



function postDashboard(req, res) {

    postModel.postDashboard()
        .then(
            async function (resultado) {
                if (resultado.length > 0) {
                    await postModel.kpiDashboardCurtida()
                        .then((resultadoCurtida) => {
                            if (resultadoCurtida.length > 0) {
                                curtidas = resultadoCurtida
                            }
                        })
                    await postModel.kpiDashboardComentario(fkUsuario)
                        .then((resultadoComentario) => {
                            if (resultadoComentario.length > 0) {
                                comentarios = resultadoComentario
                            }
                        })

                    res.json({
                        postagem: resultado,
                        comentarios: comentarios,
                        curtidas: curtidas
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



































function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idAquario = req.params.idAquario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idAquario = req.params.idAquario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal

}