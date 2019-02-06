var mongoose = require('mongoose')
var connectionString = "mongodb://<student1>:<student1>@ds034807.mlab.com:34807/cookbook"
var connection = mongoose.connection


mongoose.connect(connectionString)

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})