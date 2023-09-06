const express = require('express')
const router = express.Router()
const {SendEmails} = require('../controllers/SendMailController.js')

router.post('/sendmail' , SendEmails)

module.exports = router ;