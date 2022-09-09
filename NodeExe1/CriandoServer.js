const http = require('http')

http.createServer((requisição, resposta) =>{
  resposta.writeHead(200, {
    'contents-type': 'text/plain'
  })
  resposta.write('Matheus lindao e gatao')
  resposta.end()
}).listen(1337)