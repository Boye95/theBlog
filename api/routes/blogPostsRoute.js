const express = require('express')

const router =express.Router()



// Get all blog posts
router.get('/', (req, res) => {
    res.json({ message: 'This is all the blog posts' })
})

// Get single blog post
router.get('/:id', (req, res) => {
    res.json({ message: "this is a single blog post" })
})

// Create a new blog post
router.post('/', (req, res) => {
    res.json({ message: 'This is a new blog post' })
})

// Update a blog post
router.patch('/:id', (req, res) => {
    res.json({ message: 'This is a blog post update' })
});

module.exports = router