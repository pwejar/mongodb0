const express = require('express')
const router = express.Router()

const X2250Controller = require('../controllers/X2250Controller')
const getToken = require('../middleware/X2250')

router.get('/get_tokens',getToken, X2250Controller.getTokens)
router.post('/confirmation', X2250Controller.confirmation)
router.post('/validation', X2250Controller.validation)
module.exports = router