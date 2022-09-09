const { write } = require('fs')
const http = require('http')
const url = require('url')
const host = 3000
const porta = '127.0.0.1'

const servidor = http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/html'})
  res.write(req.url)
  const w = url.parse(req.url, true).query
  res.write('<br>'+'<p>Nome: ' + w.nome)
  res.write('<br>'+ '<p>Idade: ' + w.idade)
  res.end()
})

servidor.listen(host,porta,() => console.log('Servidor ativo'))