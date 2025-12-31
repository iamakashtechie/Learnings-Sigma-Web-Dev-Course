const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Blog home page')
})

// define the about route
router.get('/about', (req, res) => {
    res.send('About this blog')
})

// define the blogpost page route
router.get('/post/:slug', (req, res) => {
    res.send(`fetch the blog post for ${req.params.slug}`)
})

module.exports = router