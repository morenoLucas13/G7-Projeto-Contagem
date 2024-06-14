//loginController

const express = require('express') // importando modulo do express
const rotas = express.Router() // criando o roteador para adicionar rotas

const model = require('../models/loginModel') // importando a model


rotas.post('/', async (req, res) => {
    const { email, senha } = req.body

    try {
        let valida = await model.login(email, senha)
        if (valida.sucesso) {
            res.json(valida)
        } else {
            res.json({ sucesso: false, erro: 'Erro: dados de login incorreto!' })
        }
    } catch (error) {
        res.status(500).json({ sucesso: false, erro: 'Erro: Problemas ao comunicar com o servidor.' })
    }
})

module.exports = rotas //Exportando
