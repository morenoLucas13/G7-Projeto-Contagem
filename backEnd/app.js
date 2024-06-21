//  app.js
const express = require('express')
const app = express()
const cors = require('cors')

const porta = 3320
// inserindo middlewares
app.use(cors())
app.use(express.json())

const midLogConsole = require('./src/app/middlewares/midLogConsole')
app.use(midLogConsole)

app.use('/public', express.static('./public'))

// Rotas
const nomeRotas = require('./src/app/controllers/nomeController');
app.use('/nome', nomeRotas);

const turmaRotas = require('./src/app/controllers/turmasControllers');
app.use('/turma', turmaRotas);

const rotasLogin = require('./src/app/controllers/loginController')
app.use("/login", rotasLogin)

const rotasContagem = require('./src/app/controllers/contagensController')
app.use(rotasContagem)


app.listen(porta, () => {
    console.log(`Servidor Rodando em:`)
    console.log(`http://10.188.10.100:${porta}/`)
    console.log(`http://10.188.10.100:${porta}/nome/nomes`)
    console.log(`http://10.188.10.100:${porta}/turma/turmas`)
    console.log(`http://10.188.10.100:${porta}/login`)
    console.log(`http://10.188.10.100:${porta}/contagem`)
})

// login: lucas.moreno@portalsesisp.org.br
// senha: Sesisp@2643