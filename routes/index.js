const express = require('express')

const { logincontroller, signupcontroller } = require('../controllers')

const router = express.Router()

router.use('/login', logincontroller.validateUser)
router.use('/signup', signupcontroller.signupUser)

module.exports = router
