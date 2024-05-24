// Banco de Dados
const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_contagem',
    port: 3306
})

function criarConexao() {
    return pool.getConnection()
}

function liberarConexao(conexao){
    if (conexao){
        conexao.release()
    }
}

module.exports = {
    criarConexao,
    liberarConexao
}