const {Router} = require('express')
const postController = require('../controllers/postController')
const auth = require('../middleaware/auth')

const router = Router()

router.get('/',auth, postController.index)
router.post('/',auth, postController.create)
router.delete('/',auth, postController.delete)

module.exports = router