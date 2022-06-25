// const { Person } = require('./person')
const dotenv = require('dotenv')
const { application } = require('express')

const connectToDatabase = require('./src/database/connect')

dotenv.config()

connectToDatabase()

// // require('./modules/path')
// // require('./modules/fs')
// // require('./modules/http')

// const person = new Person('Pedro')

require('./modules/express')
