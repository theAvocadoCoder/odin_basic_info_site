/**
 * Require modules
 */
const express = require('express')
const fs = require('fs')

/**
 * Configure app and define relevant variables
 */
const app = express()
const port = process.env.PORT || 8080

const urls = [
  '/',
  '/contact-me',
  '/about'
]

const pages = [
  './pages/index.html',
  './pages/contact-me.html',
  './pages/about.html'
]

/**
 * Define routes
 */
app.use((req, res) => {
  if (urls.indexOf(req.url) > -1) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    const html = fs.readFileSync(pages[urls.indexOf(req.url)])
    res.end(html)
  } else {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    const html = fs.readFileSync('./pages/404.html')
    res.end(html)
  }
})

/**
 * Listen on assigned port
 */
app.listen(port, () => {
  console.log(`Running at port ${port}`)
})
