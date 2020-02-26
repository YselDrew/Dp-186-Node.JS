const http = require('http');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const server = http.createServer((req, res) => {
  res.end('<h1>Home</h1>')
})

const PORT = 3000;

server.listen(PORT, (error) => {
  if(error) {
    console.log('Something went wrong', error)
  } else {
    console.log(`Server running on port ${PORT}`)
  }
})
