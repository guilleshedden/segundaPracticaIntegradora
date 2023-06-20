const { Router } = require('express')
const { auth } = require('../middlewares/authentication.middleware')
const { notLoged } = require('../middlewares/notLoged.middleware')
const { getUsers, createUsers, updateUsers, deleteUsers } = require('../controllers/user.controller')
const router = Router()

router.get('/', notLoged ,auth, getUsers)

router.post('/', createUsers)

router.put('/', updateUsers)

router.delete('/:uid', deleteUsers)

module.exports = router