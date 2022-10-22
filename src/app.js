const express = require("express")
const errorHandler = require("./middlewares/error-handler")
const router = require("./router")

const app = express()

app.use(express.static("public"))
app.use('/api/v1/alerts', router)
app.use(errorHandler)

module.exports = app