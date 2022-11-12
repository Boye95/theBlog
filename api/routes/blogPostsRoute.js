const express = require('express')

const router =express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'Mellow from server bien merci!' })
})

module.exports = router