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

module.exports = {
    autenticar,
    cadastrar
};