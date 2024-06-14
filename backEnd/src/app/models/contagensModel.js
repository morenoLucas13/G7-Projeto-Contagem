const db = require('../../db')

//adicionar uma contagem
module.exports.adicionar = async (idusuario, idturma, cont_qtd_dieta, cont_qtd_geral, cont_sala, cont_lista_ausente,) => {
    // console.log('model', idusuario, idturma, cont_qtd_dieta, cont_qtd_geral, cont_sala, cont_lista_ausente)

    let conexao;

    let dia = (new Date()).toISOString().slice(0, 10)
    let hora = (new Date()).toLocaleTimeString()
    let data = dia + ' ' + hora
    // hora = '15:22:59'
    // dia = '2024-05-29'

    try {
        conexao = await db.criarConexao();
        const [resultado] = await conexao.execute(
            'INSERT INTO contagem (quantidade_geral_cont, quantidade_dieta_cont, data_cont, sala_cont, lista_ausentes_cont, idturma, idusuario) VALUES (?,?,?,?,?,?,?)',
            [cont_qtd_dieta, cont_qtd_geral, cont_sala, data, cont_lista_ausente, idusuario, idturma]
        )

        return resultado
    } catch (error) {
        throw error
    } finally {
        db.liberarConexao(conexao)
    }
}

//buscar todas contagens 
module.exports.retornarTodos = async () => {
    let conexao;
    try {
        conexao = await db.criarConexao()
        const [linhas] = await conexao.execute('SELECT * FROM contagem')

        return linhas
    } catch (error) {
        console.log('Erro de SQL ao executar listagem de contagens')
        throw error
    } finally {
        db.liberarConexao(conexao)
    }
}

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