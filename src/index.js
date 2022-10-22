const dbConnect = require('./db')
const app = require('./app')

const PORT = process.env.PORT || 8000

dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening on PORT ${PORT}`)
    })
  })