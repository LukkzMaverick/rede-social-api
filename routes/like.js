const {Router} = require('express')
const postController = require('../controllers/postController')
const auth = require('../middleaware/auth')

const router = Router()

router.post('/:id',auth, postController.addLike)
router.delete('/:id',auth, postController.removeLike)

module.exports = router