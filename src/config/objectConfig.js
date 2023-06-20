const { connect } = require('mongoose')
const dotenv = require('dotenv')
const { commander } = require('../utils/commander')

const { mode } = commander.opts()

dotenv.config({
    path: mode === 'development' ? './.env.development' : './.env.production'
})

let url = process.env.MONGO_URL

module.exports = {
    port: process.env.PORT,
    connectDB: () => {
        connect(url)
        console.log('Base de datos conectada')
    }
}