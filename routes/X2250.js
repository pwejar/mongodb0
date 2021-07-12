const express = require('express')
const router = express.Router()

const X2250Controller = require('../controllers/X2250Controller')

router.post('/get_tokens', X2250Controller.getTokens)
router.post('/confirmation', X2250Controller.confirmation)
router.post('/validation', X2250Controller.validation)
module.exports = router