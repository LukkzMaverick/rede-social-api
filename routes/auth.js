const {Router} = require('express')
const MSGS = require('../messages')
const authController = require('../controllers/authController')
const { check } = require('express-validator')

const router = Router()

router.post('/',[
    check('email', MSGS.VALID_EMAIL).isEmail(),
    check('password', MSGS.REQUIRED_PASSWORD).exists()
  ]
, authController.login)

module.exports = router