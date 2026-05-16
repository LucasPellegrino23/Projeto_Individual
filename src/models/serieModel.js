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

function listarSerieAcao() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie WHERE genero = 'Ação';
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function listarSerieTerror() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie WHERE genero = 'Terror';
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function listarSerieComedia() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie WHERE genero = 'Comédia';
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function listarSerieSerialKiller() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie WHERE genero = 'Serial Killer';
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function listarSerieDorama() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie WHERE genero = 'Dorama';
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function listarSerieFiccao() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie WHERE genero = 'Ficção';
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function listarSerieFiccaoCientifica() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie WHERE genero = 'Ficção Científica';
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}

function listarSerieSuspense() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);

    var instrucaoSql1 = `
        SELECT imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie WHERE genero = 'Suspense';
    `;

    console.log("Executando SQL 1: \n" + instrucaoSql1);

    return database.executar(instrucaoSql1);
}



module.exports = {
    cadastrarSerie, avaliarSerie, listarSerieAcao, listarSerieTerror, listarSerieComedia, listarSerieSerialKiller, listarSerieDorama, listarSerieFiccao, listarSerieFiccaoCientifica, listarSerieSuspense
};