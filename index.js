const http = require('http');        // Importa módulo HTTP
const fs = require('fs');            // Importa módulo de arquivos
const path = require('path');        // Importa módulo de caminhos

const server = http.createServer((req, res) => {
    // Lê o arquivo index.html
    const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    
    // Envia a resposta HTTP
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(html);
});

// Pega a porta (do Azure) ou usa 8080
const port = process.env.PORT || 8080;

// Inicia o servidor
server.listen(port, () => {
    console.log('Servidor rodando na porta ' + port);
});