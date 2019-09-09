const { Router } = require('express')
const router = Router()
const userController = require('./users')

// User routes
router.get('/users', userController.getUsers)

module.exports = router
