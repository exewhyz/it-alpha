//to create a webserver using http package.

const http = require("http"); //built in package - no need to explicitly install it.
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017') //connecting to database

// listening for start event
mongoose.connection.on('connected', function(){
  console.log('Connected to database')
})
mongoose.connection.on('error',function(error){
console.log(error.message)
})


// how to serve plain texts
const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello from Node Server");
});

server.listen(5000, function () {
  console.log("Server running at http://localhost:5000/");
});
