const express = require('express')

const rotas = express.Router()

const Tarefas = require('../models/tarefa')

// Lista tarefas
rotas.get('/', async (req, res) => {
    //todos as tarefas

    const tarefa =  await Tarefas.findAll()

    res.send(tarefa) 
  })
  
  // mostrar tarefa
  rotas.get('/:id', async (req, res) => {
      const tarefa =  await Tarefas.findByPk(req.params.id)  

      if (tarefa) {
          res.send (tarefa)
      } else {
          res.status(404).send()
      }
  })
  
  // inserir tarefa
  rotas.post('/', async (req, res) => {
     if (req.body.nome) {
         const tarefa =  await Tarefas.create({
             nome: req.body.nome})

         res.status(201).send(tarefa)
     } else {
          res.status(400).send()
     }
  
  })
  
  // Tarefa de atualização
  rotas.put('/:id', async (req, res) => {
    const tarefa = await Tarefas.findByPk(req.params.id)
      if(tarefa && req.body.nome) {
        await tarefa.update(req.body)
        res.send(tarefa)
      } else {
          res.status(404).send()
      }
  })
  
  // Apagar tarefa
  rotas.delete('/:id', async(req, res) => {
     const tarefa = await Tarefas.findByPk(req.params.id)
      if(tarefa) {
        tarefa.destroy()
          res.send()
      } else {
          res.status(404).send()
      }
  })

  module.exports = rotas