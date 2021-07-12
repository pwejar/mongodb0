const express = require('express')
const router = express.Router()

const X2250Controller = require('../controllers/X2250Controller')
const getToken = require('../middleware/X2250')

router.get('/get_tokens',getToken, X2250Controller._getTokens)
router.get('/confirmation', X2250Controller.confirmation)
router.get('/validation', X2250Controller.validation)
module.exports = router