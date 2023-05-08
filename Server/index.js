const express = require('express')
const app = express()
const users = require('./data/users.json')
const rootRouter = require('./router/router')
const port = 3000

app.use(express.json())

app.use(rootRouter)

app.listen(port, () => {
  console.log(`Serser stated at http://localhost:${port}`)
})
