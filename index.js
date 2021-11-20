const express = require('express')
const app = express()

const sequalize = require('./vinculo')
const Tarefas = require ('./models/tarefa')


const tarefasRotas = require('./rotas/tarefas')

// analisar JSON proveniente de solicitações
app.use(express.json())
app.use('/tarefas', tarefasRotas)

app.listen(3000, () => {
  console.log('Iniciando o ExpressJS na porta 3000')
})