const express = require('express')
const router = express.Router()

const MenuController = require('../controllers/menuController')
const upload = require('../middleware/upload')
const authenticate = require('../middleware/authenticate')


router.get('/',authenticate, MenuController.index)
router.post('/show', MenuController.show)
router.post('/store', upload.array('picture[]'),MenuController.store)
router.post('/update', MenuController.update)
router.post('/delete', MenuController.destroy)

module.exports = router
