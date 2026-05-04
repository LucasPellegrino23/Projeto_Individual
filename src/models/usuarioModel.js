var database = require("../database/config")

function autenticar(nome_de_usuario, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", nome_de_usuario, senha)
    var instrucaoSql = `
        SELECT id_usuario, nome_usuario, nome_de_usuario, email, telefone, senha, imagem_usuario FROM usuario WHERE nome_de_usuario = '${nome_de_usuario}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome_usuario, nome_de_usuario, email, telefone, senha, imagem_usuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome_usuario, nome_de_usuario, email, telefone, senha, imagem_usuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome_usuario, nome_de_usuario, email, telefone, senha, imagem_usuario) VALUES ('${nome_usuario}', '${nome_de_usuario}', '${email}', '${telefone}', '${senha}', '${imagem_usuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
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

module.exports = {
    autenticar,
    cadastrar,
    cadastrarSerie
};