const {Router} = require('express')
const userController = require('../controllers/userController')
const auth = require('../middleaware/auth')

const router = Router()

router.post('/',auth, userController.addEducation)
router.delete('/',auth, userController.removeEducation)

module.exports = router