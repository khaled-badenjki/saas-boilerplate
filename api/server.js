#!/usr/bin/env node
const app = require('./app')
const http = require('http')

const port = process.env.PORT || '3000'
app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('listening', onListening)

/**
 * Event listener for HTTP server "listening" event.
 */

async function onListening() {
  var addr = server.address()
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  console.log('Listening on ' + bind)
}
