var serieModel = require("../models/serieModel");

function cadastrarSerie(req, res) {
    var nomeSerie = req.body.nomeSerieServer;
    var genero = req.body.generoServer;
    var statusSerie = req.body.statusSerieServer;
    var qtdEpisodio = req.body.qtdEpisodiosServer;
    var sinopse = req.body.sinopseServer;
    var imagemSerie = req.body.imagemCapaSerieServer;
    var idUsuario = req.body.idUsuarioServer;

    if (nomeSerie == undefined) {
        res.status(400).send("O nome da série está undefined!");
    } else if(genero == undefined){
        res.status(400).send("O gênero da série está undefined!");
    } else if (statusSerie == undefined) {
        res.status(400).send("O status da série está undefined!");
    } else if (qtdEpisodio == undefined) {
        res.status(400).send("A quantidade de episódios está undefined!");
    } else if (sinopse == undefined) {
        res.status(400).send("A sinopse da série está undefined!");
    } else if (imagemSerie == undefined) {
        res.status(400).send("A imagem da série está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {

        serieModel.cadastrarSerie(nomeSerie, statusSerie, sinopse, genero, qtdEpisodio, imagemSerie, idUsuario)
            .then(
                function (resultado) {
                    res.status(200).json({ id_serie: resultado.insertId})
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

function avaliarSerie(req, res) {
    var nomeDaSerie = req.body.nomeDaSerieServer;
    var avaliacao = req.body.avaliacaoServer;
    var nota = req.body.notaServer;
    var idUsuario = req.body.idUsuarioServer;
    var fk_serie = req.body.fkSerieServer;

    if (nomeDaSerie == undefined) {
        res.status(400).send("A avaliação da série está undefined!");
    } else if(avaliacao == undefined){
        res.status(400).send("A nota da série está undefined!");
    } else if(nota == undefined){
        res.status(400).send("O id do usuário está undefined!");
    } else if(idUsuario == undefined){
        res.status(400).send("O id do usuário está undefined!");
    } else if(fk_serie == undefined){
        res.status(400).send("O id do usuário está undefined!");
    } else {

        serieModel.avaliarSerie(nomeDaSerie, avaliacao, nota, idUsuario, fk_serie)
            .then(
                function (resultado) {
                    res.status(200).json(resultado);
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

function listarSerie(req, res){
    serieModel.listarSerie().then((resultado) =>{
        res.status(200).json(resultado);
    })
}

module.exports = {
    cadastrarSerie, avaliarSerie, listarSerie
}