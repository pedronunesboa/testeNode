const mongoose = require('mongoose')

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.t0nxgg2.mongodb.net/?retryWrites=true&w=majority`,
    error => {
      if (error) {
        return console.log(
          'Ocorreu um erro ao se conectar com o banco de dados: ',
          error
        )
      }

      return console.log('Conexao ao banco de dados realizada com sucesso!')
    }
  )
}

module.exports = connectToDatabase
