const path = require('path')

// Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Nome do diretorio atuak
console.log(path.dirname(__filename));

// Extensao do arquivo
console.log(path.extname(__filename));

// Criar um objto path
console.log(path.parse(__filename));

// Juntar vários caminhos de arquivos
console.log(path.join(__dirname, "test", 'test.html'));