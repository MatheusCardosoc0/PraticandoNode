const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const servidor = http.createServer((req, res) => {
  fs.readFile('./NodeEx1/lendo_html_node/siteop.html', (err, arquivo)=> {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(arquivo)
    return res.end()
  })
})


servidor.listen(porta || 3000, () => {console.log('Server Funcinando')})