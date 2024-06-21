// Importar o Banco!
const db = require('../../db');

// Retornar nome dos estudantes
module.exports.retornarNome = async (idTurma) => {
    let conexao;
    try {
        conexao = await db.criarConexao();
        const [linhas] = await conexao.execute('SELECT idpessoas, nome_pes, idturmas FROM pessoas WHERE idturmas = ?', [idTurma]);
        console.log(linhas)
        return linhas;
    } catch (error) {
        throw error;
    } finally {
        db.liberarConexao(conexao);
    }
};
