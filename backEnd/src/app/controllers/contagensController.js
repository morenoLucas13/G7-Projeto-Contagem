const db = require('../../db')

const express = require('express')
const rotas = express.Router()

const model = require('../models/contagensModel')

//buscar todas contagens 
rotas.get('/', async (req, res) => {
    try {
        res.json(await model.retornarTodos())
    } catch (error) {
        console.log('Erro ao listar as contagem', error)
        res.status(500).json({ error: 'Erro interno do servidor' })
    }
})

//buscar nome dos estudantes
rotas.get('/', async (req, res) => {
    try {
        res.json(await model.retornaNome())
    } catch (error) {
        console.log('Erro ao buscar o nome dos estudantes', error)
        res.status(500).json({ error: 'Erro interno do servidor' })
    }
})

//buscar uma contagem
rotas.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        res.json(await model.retornaUm(id))
    } catch (error) {
        console.log('Erro ao listar contagem', error)
        res.status(500).json({ error: 'Erro interno do servidor' })
    }
})

//adicionar uma nova contagem
rotas.post('/', async (req, res) => {
    const { idusuario, idturma, cont_qtd_dieta, cont_qtd_geral, cont_sala, cont_data, cont_lista_ausente } = req.body
    try {
        res.json(await model.adicionar(idusuario, idturma, cont_qtd_dieta, cont_qtd_geral, cont_sala, cont_data, cont_lista_ausente))
    } catch (error) {
        console.error('Erro ao criar uma contagem', error)
        res.status(500).json({ error: 'Erro interno do servidor' })
    }
})

//deletar uma contagem 
rotas.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        res.json(await model.remover(id))
    } catch (error) {
        console.log('Erro ao listar contagem', error)
        res.status(500).json({ error: 'Erro interno do servidor' })
    }
})


// atualizar uma contagem
// rotas.put('/:id', async (req, res) => {
//     const {id} = req.params
//     const {idusuario, idturma, qtd_geral, qtd_dieta, sala, cont_data , lista_ausente} = req.body

//     try {
//         res.json(await model.atualizar(id, idusuario, idturma, qtd_geral, qtd_dieta, sala, cont_data, lista_ausente))
//     } catch (error) {
//         console.log('Erro ao listar contagem', error)
//         res.status(500).json({ error: 'Erro interno do servidor'})
//     }
// })

module.exports = rotas
