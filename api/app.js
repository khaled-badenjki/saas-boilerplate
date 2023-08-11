const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const routes = require('./routes')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api', routes)

module.exports = app
