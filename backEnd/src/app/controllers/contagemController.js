// contagemController

// importando banco
const db = require('../../db')

const express = require('express') // importando modulo do express
const rotas = express.Router() // criando o roteador para adicionar rotas

const model = require('../model/contagemModel') // importando a model

// rota de listagem de contagem

rotas.get('/', async (req, res) => {
    try {
        res.json(await model.buscarTodos())
    } catch (error) {
        console.log('Erro ao listar os contagem', error)
        res.status(500).json({ error: 'Erro interno do servidor' })
    }
    console.log('Fim da Rota GET')
})

// // rota de listar de produto
// rotas.get('/:id', async (req, res) => {
    
// })


// // rota de cadastro de produto
// rotas.post('/', async (req, res) => {
//     // abrir conexão com banco
//     let conexao
//     try {
//         conexao = await db.criarConexao()
//         // capturar os dados do body
//         const { nome, preco } = req.body
//         console.log({ nome, preco })
//         // cadastrar no banco
//         const [resultado] = await conexao.execute(
//             "INSERT INTO contagem (pro_nome, pro_preco) VALUES (?, ?)",
//             [nome, preco])
//         console.log(resultado)
//         // construindo retorno
//         let novo = { id: resultado.insertId, nome, preco }
//         // responder requisição
//         res.json(novo)
//     } catch (error) {
//         console.log('Erro ao lista os contagem', error)
//         res.status(500).json({ error: 'Erro interno do servidor' })
//     } finally {
//         db.liberarConexao(conexao)
//     }
// })

// rota de remoção

// rota de atualização

// exportando
module.exports = rotas