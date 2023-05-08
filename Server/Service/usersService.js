const users = require('../data/users.json')

const usersService = {}

usersService.getAllUsers = () => {
  return users
}
module.exports = usersService
