// Importar o Banco!
const db = require('../../db');

// Retornar nome dos estudantes
module.exports.retornarNome = async () => {
   
    let conexao;
    try {
        conexao = await db.criarConexao();
        const [linhas] = await conexao.execute('SELECT t.idturmas, t.nome_tur, c.quantidade_geral_cont FROM turmas t LEFT JOIN contagem c ON t.idturmas = c.idturmas');
 console.log(linhas)
        return linhas;
    } catch (error) {
        throw error;
    } finally {
        db.liberarConexao(conexao);
    }
};