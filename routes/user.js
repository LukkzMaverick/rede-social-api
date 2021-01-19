const {Router} = require('express')
const { check } = require('express-validator')
const postController = require('../controllers/postController')
const userController = require('../controllers/userController')
const MSGS = require('../messages')
const auth = require('../middleaware/auth')
const file = require('../middleaware/file')

const router = Router()

router.get('/',auth, userController.index)
router.get('/:id',auth, userController.getOneById)
router.patch('/:userId', auth, [
    check('email', MSGS.VALID_EMAIL).isEmail()
  ], file, userController.update)
router.post('/',[
    check('email', MSGS.VALID_EMAIL).isEmail(),
    check('name', MSGS.USER_NAME_REQUIRED).not().isEmpty(),
    check('username', MSGS.USERNAME_REQUIRED).not().isEmpty(),
    check('password', MSGS.PASSWORD_VALIDATED).isLength({ min: 6 })
  ], file, userController.create)

module.exports = router