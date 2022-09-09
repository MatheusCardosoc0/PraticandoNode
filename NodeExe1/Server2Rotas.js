const http = require('http')
const host = 3000
const porta = '127.0.0.1'

const servidor = http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/html'})
  if(req.url == '/'){
    res.write('<h1>Sayajin</h1>')
  }
  else if(req.url == '/jubileu'){
    res.write('<h1>Jubileu</h1>')
  }
  else if(req.url == '/banana'){
    res.write('<h1>Banana</h1>')
  }
  res.end()
})

servidor.listen(host,porta,() => console.log('Servidor ativo'))
