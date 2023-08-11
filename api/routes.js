const express = require('express')
const router = express.Router()

router.get('/health-check', (req, res, next) => {
  res.json({
    status: 'ok'
  })
})

module.exports = router