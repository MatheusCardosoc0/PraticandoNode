const express = require('express')
const rotas = express.Router()


const nomesInfo = [
  {'nome': 'Bob', 'profissão': 'policial'},
  {'nome': 'Mark', 'profissão': 'padeiro'},
  {'nome': 'Lucian', 'profissão': 'taxista'},
  {'nome': 'Legolas', 'profissão': 'alpinista'},
]

rotas.get('/',(req,res) =>{
  res.json({ola: 'eae'})
})

rotas.get('/:nomeid',(req,res) => {
  const nomes = req.params.nomeid
  const nomesI = nomesInfo.find(i => i.nome == nomes)
  if(!nomesI){
    res.status(404).json({erro:'nome não encontrado', momePesquisado: nomes})
  }
  else{
    res.status(200).json(nomesI)
  }
})

module.exports = rotas