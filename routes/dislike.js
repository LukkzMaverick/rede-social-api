const {Router} = require('express')
const postController = require('../controllers/postController')
const auth = require('../middleaware/auth')

const router = Router()

router.post('/:id',auth, postController.addDislike)
router.delete('/:id',auth, postController.removeDislike)

module.exports = router