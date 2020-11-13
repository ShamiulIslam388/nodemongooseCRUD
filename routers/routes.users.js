const router = require('express').Router()
const usersController = require('../controllers/controllers.users')

router.get('/', usersController.getusers)
router.post('/add', usersController.postusers)
router.get('/:id', usersController.getsingleuser)
router.patch('/:id', usersController.updateuser)
router.delete('/:id', usersController.deleteuser)

module.exports = router