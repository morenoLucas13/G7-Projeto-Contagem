// contagem model

// importando banco
const db = require('../../db')

async function buscarTodos() {
    let conexao
    try {
        // cria a conexão com o banco
        conexao = await db.criarConexao()
        const [linhas] = await conexao.execute(
            'SELECT * FROM contagem') // executa a sql

        return linhas
    } catch (error) {
        console.log('Erro de SQL ao executar listagem de contagem')
        throw error
    } finally {
        // liberando a conexão com banco para o pool
        db.liberarConexao(conexao)
        console.log('Conexão Fechada')
    }
}

module.exports = {
    buscarTodos
}