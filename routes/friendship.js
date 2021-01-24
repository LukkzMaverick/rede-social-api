const {Router} = require('express')
const userController = require('../controllers/userController')
const auth = require('../middleaware/auth')

const router = Router()

router.get('/',auth, userController.getFriendship)
router.post('/',auth, userController.newFriendship)
router.delete('/',auth, userController.deleteFriendship)

module.exports = router