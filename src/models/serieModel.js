var database = require("../database/config")

function cadastrarSerie(nomeSerie, sinopse, genero, qtdEpisodio, imagemSerie, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():", nomeSerie, sinopse, genero, qtdEpisodio, imagemSerie, idUsuario);

    var instrucaoSql1 = `
        INSERT INTO serie (nome_serie, sinopse, genero, qtd_episodios, imagem, fk_usuario) VALUES ('${nomeSerie}', '${sinopse}', '${genero}', '${qtdEpisodio}', '${imagemSerie}', '${idUsuario}');
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function avaliarSerie(nomeDaSerie, avaliacao, nota, idUsuario, fk_serie) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():", nomeDaSerie, avaliacao, nota, idUsuario, fk_serie);
    
    var instrucaoSql1 = `
        INSERT INTO avaliacao (nome_serie_avaliacao, desc_avaliacao, nota_serie, fk_usuario_2, fk_serie) VALUES ('${nomeDaSerie}', '${avaliacao}', '${nota}', '${idUsuario}', ${fk_serie});
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function buscarGenero() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT genero, COUNT(id_avaliacao) AS qtd_avaliacao FROM serie JOIN avaliacao ON serie.id_serie = avaliacao.fk_serie GROUP BY genero;
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function buscarAvaliacao() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT nome_serie_avaliacao, COUNT(id_avaliacao) AS qtd_avaliacao FROM serie JOIN avaliacao ON serie.id_serie = avaliacao.fk_serie GROUP BY nome_serie_avaliacao ORDER BY qtd_avaliacao DESC LIMIT 10;
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

// function kpiMaisBemAvaliada() {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

//     var instrucaoSql1 = `
//         SELECT nome_serie, AVG(nota_serie) AS media_avaliacao FROM serie JOIN avaliacao ON serie.id_serie = avaliacao.fk_serie GROUP BY nome_serie;
//     `;

//     console.log("Executando SQL 1: \n" + instrucaoSql1);

//     return database.executar(instrucaoSql1);
// }

function listarSerieAcao() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT nome_de_usuario, imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie JOIN usuario ON usuario.id_usuario = avaliacao.fk_usuario_2 WHERE genero = 'Ação';
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function listarSerieTerror() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT nome_de_usuario, imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie JOIN usuario ON usuario.id_usuario = avaliacao.fk_usuario_2 WHERE genero = 'Terror';
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function listarSerieComedia() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT nome_de_usuario, imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie JOIN usuario ON usuario.id_usuario = avaliacao.fk_usuario_2 WHERE genero = 'Comédia';
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function listarSerieSerialKiller() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT nome_de_usuario, imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie JOIN usuario ON usuario.id_usuario = avaliacao.fk_usuario_2 WHERE genero = 'Serial Killer';
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function listarSerieDorama() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT nome_de_usuario, imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie JOIN usuario ON usuario.id_usuario = avaliacao.fk_usuario_2 WHERE genero = 'Dorama';
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function listarSerieFiccao() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT nome_de_usuario, imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie JOIN usuario ON usuario.id_usuario = avaliacao.fk_usuario_2 WHERE genero = 'Ficção';
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function listarSerieFiccaoCientifica() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT nome_de_usuario, imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie JOIN usuario ON usuario.id_usuario = avaliacao.fk_usuario_2 WHERE genero = 'Ficção Científica';
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function listarSerieSuspense() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT nome_de_usuario, imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie JOIN usuario ON usuario.id_usuario = avaliacao.fk_usuario_2 WHERE genero = 'Suspense';
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function kpiMaisBemAvaliada() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT nome_serie_avaliacao, ROUND(AVG(nota_serie), 1) AS media_notas FROM avaliacao GROUP BY nome_serie_avaliacao ORDER BY media_notas DESC LIMIT 1;
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function kpiMaisAvaliada() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT nome_serie_avaliacao, COUNT(fk_serie) AS quantidade_avaliacoes FROM avaliacao GROUP BY nome_serie_avaliacao ORDER BY quantidade_avaliacoes DESC LIMIT 1;
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function kpiMenosAvaliada() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT nome_serie_avaliacao, ROUND(AVG(nota_serie), 1) AS media_notas FROM avaliacao GROUP BY nome_serie_avaliacao ORDER BY media_notas ASC LIMIT 1;
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function buscarSeriePorNome(nomeSerie) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT id_serie, nome_serie FROM serie WHERE nome_serie = '${nomeSerie}';
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

module.exports = {
    cadastrarSerie, avaliarSerie, buscarGenero, buscarAvaliacao, listarSerieAcao, listarSerieTerror, listarSerieComedia, listarSerieSerialKiller, listarSerieDorama, listarSerieFiccao, listarSerieFiccaoCientifica, listarSerieSuspense, kpiMaisBemAvaliada, kpiMaisAvaliada, kpiMenosAvaliada, buscarSeriePorNome
};