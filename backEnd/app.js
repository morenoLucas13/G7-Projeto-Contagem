// Incluindo os pacotes do express e do cors no projeto
const express = require('express');
const cors = require('cors');

// Criar uma constante app que recebe o express
const app = express();

// Criar uma constante que define em qual porta, o servidor vai rodar
const porta = 3320;

// Inserindo middlewares
app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
    const { email, senha} = req.body

    console.log(req.body);

    // email: bob@gmail.com
    // senha: bob123
    if (email == 'bob' && senha == 'bob') {
        res.json({ sucesso: true, /*nivel: 0*/ })
    } else {
        res.status(400).json({ sucesso: false, error: 'Erro: dados de login incorretos!' })
    }
});



// Inicia o servidor na porta
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});