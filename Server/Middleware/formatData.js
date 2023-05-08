const formatData = (_, res) => {
    const status = res.statusCode ? res.statuscode : 200
    const data = res.data

    res.status(status).json({data})
}
module.exports = formatData