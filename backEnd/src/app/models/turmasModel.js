// Importar o Banco!
const db = require('../../db');

// Retornar nome dos estudantes
module.exports.retornarNome = async () => {
   
    let conexao;
    try {
        conexao = await db.criarConexao();
        const [linhas] = await conexao.execute('SELECT idturmas, nome_tur FROM turmas');
 console.log(linhas)
        return linhas;
    } catch (error) {
        throw error;
    } finally {
        db.liberarConexao(conexao);
    }
};