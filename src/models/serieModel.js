var database = require("../database/config")

function cadastrarSerie(nomeSerie, statusSerie, sinopse, genero, qtdEpisodio, imagemSerie, avaliacao, nota, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():", nomeSerie, statusSerie, sinopse, genero, qtdEpisodio, imagemSerie, avaliacao, nota, idUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql1 = `
        INSERT INTO serie (nome_serie, status_serie, sinopse, genero, qtd_episodios, imagem, fk_usuario) VALUES ('${nomeSerie}', '${statusSerie}', '${sinopse}', '${genero}', '${qtdEpisodio}', '${imagemSerie}', '${idUsuario}');
    `;

    var instrucaoSql2 = `
        INSERT INTO avaliacao (nome_serie_avaliacao, desc_avaliacao, nota_serie, fk_usuario_2) VALUES ('${nomeSerie}', '${avaliacao}', ${nota}, '${idUsuario}');
    `;
    console.log("Executando SQL 1: \n" + instrucaoSql1);
    console.log("Executando SQL 2: \n" + instrucaoSql2);

    return database.executar(instrucaoSql1)
        .then(function () {
            return database.executar(instrucaoSql2);
        });
}

function listarSerie() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSerie():",);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql1 = `
        SELECT nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao;
    `;

    return database.executar(instrucaoSql1);
}

module.exports = {
    cadastrarSerie, listarSerie
};