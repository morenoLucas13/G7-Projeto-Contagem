const express = require('express'); // importando modulo do express
const rotas = express.Router(); // criando o roteador para adicionar rotas

const model = require('../models/turmasModel'); // importando a model

rotas.get('/turmas', async (req, res) => {
    try {
        const turmas = await model.retornarNome();
        res.json(turmas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar turmas' });
    }
});

module.exports = rotas; // Exportando