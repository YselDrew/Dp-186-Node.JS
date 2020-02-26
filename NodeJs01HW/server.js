const http = require('http');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const server = http.createServer((req, res) => {
  let data = '';
  const arr = [];

  if (req.method.toLowerCase() === "get") {
    fs.readdir('./data', (error, files) => {
      if (error) {
        console.log('Unable to scan directory: ' + error);
      }
      files.forEach(file => {
        let filePath = `./data/${file}`
        fs.readFile(filePath, (error, data) => {
          const fileData = data.toString('utf8');
          // arr.push and res.end(arr) but it doesn't work without promisified fs.readFile
        })
      })
    })
    res.send('Received GET request');
  }

  if(req.method.toLowerCase() === "post") {
    req.on('data', chunk => {
      data += chunk.toString('utf8');
      fs.writeFile(`./data/${uuidv4()}.json`, (data), (error) => {
        if (error) {
          throw error; 
        }
        console.log("File written succesfully");
      })
    })
    res.end("Received POST request");
  } 
})

const PORT = 3000;

server.listen(PORT, (error) => {
  if(error) {
    console.log('Something went wrong', error);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
})
