const db = require('../../db');

module.exports.adicionar = async (idusuario, idturmas, quantidade_geral_cont, quantidade_dieta_cont, lista_ausentes_cont, data_cont) => {
    let conexao;
    try {
        // uma variável onde 
        const data_cont_formatada = new Date(data_cont).toISOString().slice(0, 19).replace('T', ' ');

        conexao = await db.criarConexao();
        const [resultado] = await conexao.execute(
            'INSERT INTO contagem (quantidade_geral_cont, quantidade_dieta_cont, data_cont, lista_ausentes_cont, idturmas, idusuario) VALUES (?, ?, ?, ?, ?, ?)',
            [quantidade_geral_cont, quantidade_dieta_cont, data_cont_formatada, lista_ausentes_cont, idturmas, idusuario]
        );
        return resultado;
    } catch (error) {
        throw error;
    } finally {
        db.liberarConexao(conexao);
    }
};

// buscar alunos que fazem dieta
module.exports.buscarAlunosDieta = async (idturmas) => {
    let conexao;
    try {
        conexao = await db.criarConexao();
        const [alunosDieta] = await conexao.execute(
            'SELECT COUNT(*) AS quantidade_dieta FROM pessoas WHERE idturmas = ? AND dieta_pes = 2',
            [idturmas]
        );
        return alunosDieta[0].quantidade_dieta;
    } catch (error) {
        throw error;
    } finally {
        db.liberarConexao(conexao);
    }
};

// outros métodos...



//retornar uma contagem 
module.exports.retornaUm = async (id) => {
    let conexao;
    try {
        conexao = await db.criarConexao()
        const [linhas] = await conexao.execute('SELECT * FROM contagem WHERE idcontagem = ?', [id])

        return linhas
    } catch (error) {
        throw error
    } finally {
        db.liberarConexao(conexao)
    }
}

//remover uma contagem
module.exports.remover = async (id) => {
    let conexao;
    try {
        conexao = await db.criarConexao()
        const [resultado] = await conexao.execute('DELETE FROM contagem WHERE idcontagem = ?', [id])

        return resultado
    } catch (error) {
        throw error
    } finally {
        db.liberarConexao(conexao)
    }
}


//atualizar uma contagem
// module.exports.atualizar = async (id, idusuario, idturma, qtd_geral, qtd_dieta, sala, cont_data, lista_ausente) => {
//     let conexao;
//     try {
//         conexao = await db.criarConexao();
//         const query = `UPDATE contagens SET idusuario = ?, idturma = ?,
//                         cont_qtd_geral = ?, cont_qtd_dieta = ?,
//                         cont_sala = ?, cont_data = ?, const_lista_ausente = ?
//                        WHERE idcontagem = ?`;
//         const [resultado] = await conexao.execute(query, [idusuario, idturma, qtd_geral, qtd_dieta, sala, cont_data, lista_ausente, id]);

//         return resultado;
//     } catch (error) {
//         throw error;
//     } finally {
//         if (conexao) db.liberarConexao(conexao);
//     }
// }