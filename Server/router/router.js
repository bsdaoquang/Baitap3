const usersRouter = require('./usersRouter')
const rootRouter = require('express').Router( )

rootRouter.use('/user', usersRouter)
rootRouter.use(require('../Middleware/formatData'))

module.exports = rootRouter