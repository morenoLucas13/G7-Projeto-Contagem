// Banco de Dados
const mysql = require("mysql2/promise")


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_contagem',
})


function criarConexao() {
    return pool.getConnection()
}

async function liberarConexao(conexao) {
    if (conexao) {
        conexao.release()
    }
}

async function testarConexao() {
    let conexao = null;
    try {
        conexao = await criarConexao();
        console.log('Conexão com o banco de dados estabelecida com sucesso!')
    } catch (error) {
        console.error('Erro ao conectar com o banco de dados', error)
        return false
    } finally {
        if (conexao) {
            conexao.release()
        }
    }
    return true
}

module.exports = {
    criarConexao,
    liberarConexao,
    testarConexao
}