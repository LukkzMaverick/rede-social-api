const {Router} = require('express')
const topicController = require('../controllers/topicController')
const auth = require('../middleaware/auth')

const router = Router()

router.get('/',auth, topicController.index)
router.post('/',auth, topicController.create)

module.exports = router