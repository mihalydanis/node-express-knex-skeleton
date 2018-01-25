'use strict'

const app = require('../app')
const config = require('../config').server

const server = app.listen(config.port, (err) => {
  if (err) {
    return console.log('An error happened', err)
  }
  console.log(`App listening on port ${config.port}!`)
})

process.on('SIGTERM', () => {
  console.log('Graceful shutdown start')

  server.close((err) => {
    if (err) {
      console.log('Graceful shutdown error', err)
      process.exit(-1)
    }

    console.log('Graceful shutdown success')
    process.exit(0)
  })
})
