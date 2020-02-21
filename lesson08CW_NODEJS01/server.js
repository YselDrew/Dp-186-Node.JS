const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // fs.readFile('./data.json', (err, data) => {
  //   if (err) {
  //     console.error(err);
  //   }
  //   console.log(data);
  //   // console.log(data.toString('utf8'));
  //   res.end(data.toString('utf8'));
  // })
  //
  // // const dataJson = fs.readFileSync('./data.json') // Bad idea
  //
  // console.log(req.method);
  // res.write('hello')

  let data = '';

  req.on('data', (chunk) => {
    console.log(chunk);
    data += chunk.toString('utf8');
  })

  req.on('end', () => {
    res.end(data);
  });

})

server.listen(4000);
