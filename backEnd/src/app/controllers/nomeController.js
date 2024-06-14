const express = require('express'); // importando modulo do express
const rotas = express.Router(); // criando o roteador para adicionar rotas

const model = require('../models/nomeModel'); // importando a model

rotas.get('/nomes', async (req, res) => {
    try {
        const nomes = await model.retornarNome();
        res.json(nomes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar nomes' });
    }
});

module.exports = rotas; // Exportando