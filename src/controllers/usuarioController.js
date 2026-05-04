var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var nome_de_usuario = req.body.nomeDeUsuarioServer;
    var senha = req.body.senhaServer;

    if (nome_de_usuario == undefined) {
        res.status(400).send("Seu nome de usuário está indefinido!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(nome_de_usuario, senha)
            .then(
                function (resultadoAutenticar) {
    if (resultadoAutenticar.length > 0) {
        res.json(resultadoAutenticar[0]); // retorna o usuário encontrado
    } else {
        res.status(401).send("Usuário ou senha inválidos!");
    }
}
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var nomeDeUsuario = req.body.nomeDeUsuarioServer;
    var email = req.body.emailServer;
    var telefone = req.body.telefoneServer;
    var senha = req.body.senhaServer;
    var imagem_usuario = req.body.imagemServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if(nomeDeUsuario == undefined){
        res.status(400).send("Seu nome de usuário está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (imagem_usuario == undefined) {
        res.status(400).send("Sua imagem está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, nomeDeUsuario, email, telefone, senha, imagem_usuario)
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
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarSerie(nomeSerie, statusSerie, sinopse, genero, qtdEpisodio, imagemSerie, avaliacao, nota)
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
    autenticar,
    cadastrar,
    cadastrarSerie
}