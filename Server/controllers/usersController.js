const usersController = (router, service) => {
    const userService = service

    router.get('/getAllusers', (_, res, next) => {
        const users = userService.getAllusers()

        res.data= users

        next() 
    })
}
module.exports = usersController