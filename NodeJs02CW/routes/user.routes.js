const { Router } = require('express');
const usersController = require('/user.controller')

const router = new Router;

router.get('/',  usersController.createUser)
router.post('/', (req, res, nest) => { })
router.put('/:id', (req, res, nest) => { })
router.delete('/:id', (req, res, nest) => { })

module.exports = router;

