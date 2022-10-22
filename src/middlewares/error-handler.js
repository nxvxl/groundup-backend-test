function errorHandler(err, req, res, next) {
  return res.status(400).json({ message: "Something went wrong" })
}

module.exports = errorHandler