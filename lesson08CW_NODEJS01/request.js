const axios = require('axios');

axios.post('http://localhost:4000', { name: 'Alan' })
  .then(res => console.log(res.data))

