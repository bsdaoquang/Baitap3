const usersRouter = require('./usersRouter')
const rootRouter = require('express').Router()

rootRouter.use('/user', usersRouter)
rootRouter.use(require('../Middleware/formatData.js'))

module.exports = rootRouter
