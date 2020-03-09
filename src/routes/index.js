const { Router } = require('express')
const router = Router()

const { getHola } = require('../controllers/index.controller')

router.get('/', getHola)


module.exports = router