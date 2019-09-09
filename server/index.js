const express = require('express')
const bodyParser = require('body-parser')
const basicAuth = require('express-basic-auth')

if (!process.env.NODE_ENV === 'production') require('dotenv').config()

// Load in specific routes
const apiRoutes = require('./api')

// Configure our server
const app = express()

// Enable Basic Auth on server routes
if (process.env.BASIC_AUTH === 'enabled') {
  app.use(basicAuth({
    challenge: true,
    users: { dev: 'password' }
  }))
}

app.use(bodyParser.json())
// Define server routes
app.use(apiRoutes)

export default [
  {
    path: '/api',
    handler: app
  }
]
