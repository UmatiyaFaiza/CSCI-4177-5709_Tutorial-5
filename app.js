//https://dal.brightspace.com/d2l/le/content/250793/viewContent/3445551/View
const express = require('express')
const app = express()
const route = require('./route')

//converting all the request to json
app.use(express.json())

//The app will use route component whenever the get or post request is made
app.use('', route)

module.exports = app