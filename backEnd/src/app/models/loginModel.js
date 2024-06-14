//Importar o Banco!
const db = require("../../db");

async function login(email, senha) {
  let conexao;

  try {
    // Cria a conexão com o banco
    conexao = await db.criarConexao();
    //Executar SQL
    const [linhas] = await conexao.execute(
      `
      SELECT * FROM usuarios WHERE email_us = ? AND senha_us = ?`,
      [email, senha]
    );
    console.log(linhas)

    if (linhas.length == 1) {
      // Encontrou o usuário
      return { sucesso: true, nivel: linhas.nivel_acesso_us }

    } else {
      //Não encontrou o usuário
      return { sucesso: false };
    }
  } catch (error) {
    throw error;
  } finally {
    db.liberarConexao(conexao);
  }
}

module.exports = {
  //Exportando funções do modulo!
  login
};