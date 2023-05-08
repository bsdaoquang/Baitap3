const formatData = (_, res) => {
  const status = res.statusCode ? res.statuscode : 200
  const data = res.data

  res.status(200).json({ data })
}
module.exports = formatData
