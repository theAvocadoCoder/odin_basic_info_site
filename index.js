/**
 * Require Modules
 */
const http = require('http');
const fs = require('fs');

/**
 * Define Relevant Variables
 */
const port = process.env.PORT || 8080;

const urls = [
  '/',
  '/contact-me',
  '/about'
];

const pages = [
  './index.html',
  './contact-me.html',
  './about.html'
];

/**
 * Create Server
 */

const server = http.createServer((req, res) => {
  if (urls.indexOf(req.url) > -1) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    html = fs.readFileSync(pages[urls.indexOf(req.url)]);
    res.end(html);
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    html = fs.readFileSync('./404.html');
    res.end(html);
  }
});

/**
 * Listen on assigned port
 */

server.listen(port, () => {
  console.log(`Running at port ${port}`);
});