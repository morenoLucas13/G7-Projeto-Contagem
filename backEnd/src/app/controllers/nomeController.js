const express = require('express'); // importando modulo do express
const rotas = express.Router(); // criando o roteador para adicionar rotas

const model = require('../models/nomeModel'); // importando a model

rotas.get('/nomes', async (req, res) => {
    const idTurma = req.query.idTurma; // obter o idTurma dos parâmetros de consulta
    if (!idTurma) {
        return res.status(400).json({ error: 'idTurma é necessário' });
    }

    try {
        const nomes = await model.retornarNome(idTurma);
        res.json(nomes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar nomes' });
    }
});

module.exports = rotas; // Exportando