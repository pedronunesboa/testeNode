const fs = require('fs')
const path = require('path')

// criar uma pasta
// fs.mkdir(path.join(__dirname, '/test'), (error) => {
//   if (error) {
//     return console.log("Erro: ", error);
//   }

//   console.log("Pasta criada com sucesso!");
// });

// Criar um arquivo (sobreescreve por cima do conteudo)
fs.writeFile(
  path.join(__dirname, '/test', 'test.txt'),
  'hello node!',
  error => {
    if (error) {
      return console.log('Erro: ', error)
    }

    console.log('Arquivo criado com sucesso.')

    // Adicionar um conteudo a um arquivo
    fs.appendFile(
      path.join(__dirname, '/test', 'test.txt'),
      'hello world!',
      error => {
        if (error) {
          return console.log('Erro: ', error)
        }

        console.log('Arquivo modificado com sucesso!')
      }
    )

    // Leitura de um arquivo
    fs.readFile(
      path.join(__dirname, '/test', 'test.txt'),
      'utf8',
      (error, data) => {
        if (error) {
          return console.log('Erro: ', error)
        }

        return console.log(data)
      }
    )
  }
)
