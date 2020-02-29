const express = require('express');
const app = express();

app.get('/users', (req, res, next) => {

});

app.post('/users', (req, res, next) => {

});

app.put('/users/:id', (req, res, next) => {
  req.params // { id: 25 }
})

app.delete('/users/:id', ...);


app.listen(3000);

//MIDDLEWARES

app.get('/users', (req, res, next) => {
  next(); // end actions, go to the next, calls next function
          // as argument can have 'error' (it can be object)
  
}, (req, res, next) => {

}, (err, req, res, next) => { // calls if next() has error argument 
                              // and do not call other functions

}); // all functions instead of last are middlewares

// Authorization, authentification
//
// CREATE USER
//
// name
// login      ----> Write to DataBase ----> save
// password
//
// LOGIN
//
// 1. password -----> 2. check -----> 3. create authorization token (encrypt -> string, JsonWToken)
//                                                |
// 4. authorization: [token] <------to user-------| 
//      |
//      |-----> 5. { id: 2sai5, login: user }
//                 { secretKey, expirationDate }
//
//
// ADD TO DATABASE
// +---------+
// | USER    |
// +---------+
// |name     |
// |email    |
// |password |
// +---------+
//
// user ------>        Node.js APP            ---> DataBase
//       HTTP  -->  pg.query('insert...')
//            
//       GET   -->   pg.query('select..')     ----> DataBase
//                                                    |
//                                 <---[{...},{...}]--|
//                                 
