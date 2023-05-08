const usersService = require('../Service/usersService')
const usersController = require('../controllers/usersController')

const usersRouter = require('express').Router()

usersController(usersRouter, usersService)

module.exports = usersRouter
