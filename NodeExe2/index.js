const express = require('express')
const rotas = require('./rotas')
const porta = process.env.PORT || 3000

const app = express()

app.use('/', rotas)

app.get('*',(req,res) =>{
  res.json('Matheus Lindão')
})

app.listen(porta,() => {console.log('Funcionando')})