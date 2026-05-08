var serieModel = require("../models/serieModel");

function cadastrarSerie(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeSerie = req.body.nomeSerieServer;
    var genero = req.body.generoServer;
    var statusSerie = req.body.statusSerieServer;
    var qtdEpisodio = req.body.qtdEpisodiosServer;
    var sinopse = req.body.sinopseServer;
    var avaliacao = req.body.avaliacaoServer;
    var nota = req.body.notaServer;
    var imagemSerie = req.body.imagemCapaSerieServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
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
    } else if (avaliacao == undefined) {
        res.status(400).send("A avaliação da série está undefined!");
    } else if (nota == undefined) {
        res.status(400).send("A nota da série está undefined!");
    } else if (imagemSerie == undefined) {
        res.status(400).send("A imagem da série está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        serieModel.cadastrarSerie(nomeSerie, statusSerie, sinopse, genero, qtdEpisodio, imagemSerie, avaliacao, nota, idUsuario)
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
    cadastrarSerie
}