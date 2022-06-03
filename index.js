const http = require('http');
const fs = require('fs');

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
]

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

server.listen(port, () => {
  console.log(`Running at port ${port}`);
});