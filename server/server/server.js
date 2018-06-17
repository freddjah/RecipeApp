require('./config/config')

const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')

const app = express()

app.use(
  [
    bodyParser.json(), 
    cors({
      credentials: true,
      origin: 'http://localhost:3001'
    })
  ]
)

app.get('/search', (request, response) => {
  const ingredients = request.query.ingredients

  if (!ingredients) return response.status(400).send()

  const requestUrl = `http://food2fork.com/api/search?key=${process.env.FOOD2FORK_KEY}&q=${ingredients}`

  axios
    .get(requestUrl)
    .then((result) => {
      response.status(200).send(result.data)
    })
    .catch((error) => {
      response.status(400).send()
    })
})

app.listen(3000)

module.exports = { app }