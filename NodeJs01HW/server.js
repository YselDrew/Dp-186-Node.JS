const http = require('http');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const server = http.createServer((req, res) => {
  let data = '';

  if(req.method.toLowerCase() === "post") {
    req.on('data', chunk => {
      data += chunk;
      fs.writeFile(`./data/${uuidv4()}.txt`, JSON.stringify(data), (error) => {
        if (error) {
          throw error; 
        }
        console.log("File written succesfully");
      })
    })
    res.end("Received POST request");
  } else if (req.method.toLowerCase() === "get") {
    res.end("Received GET request");
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
